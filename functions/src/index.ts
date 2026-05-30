import * as functions from 'firebase-functions';
import axios from 'axios';
import cors = require('cors');
import { products } from './data';

const corsHandler = cors({ origin: true });

// PayPal environment config
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_API_BASE_URL = 'https://api-m.sandbox.paypal.com' } = process.env;

/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 */
async function generateAccessToken() {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error('MISSING_API_CREDENTIALS');
  }

  const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_CLIENT_SECRET).toString('base64');
  const response = await axios.post(`${PAYPAL_API_BASE_URL}/v1/oauth2/token`, 'grant_type=client_credentials', {
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
}

/**
 * Validates the cart items sent from the client and calculates total securely
 */
function calculateOrderAmount(cart: any[]) {
  const SHIPPING_COST = 130;
  let total = SHIPPING_COST;

  cart.forEach(item => {
    // Find product securely from our database
    const product = products.find(p => p.id === item.id);
    if (!product) throw new Error(`Product not found: ${item.id}`);

    const variation = product.variations.find((v: any) => v.id === item.variationId);
    if (!variation) throw new Error(`Variation not found: ${item.variationId}`);

    total += variation.price * item.quantity;
  });

  return total;
}

export const createPayPalOrder = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    try {
      const { cart } = req.body;
      if (!cart || !Array.isArray(cart)) {
        res.status(400).send('Invalid cart data');
        return;
      }

      // 1. Calculate the final price securely on the backend
      const totalAmount = calculateOrderAmount(cart);

      // 2. Auth with PayPal
      const accessToken = await generateAccessToken();

      // 3. Create Order
      const url = `${PAYPAL_API_BASE_URL}/v2/checkout/orders`;
      const payload = {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'MXN',
              value: totalAmount.toString(),
            },
            description: 'Teonanactl Productos',
          },
        ],
      };

      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      res.status(200).json(response.data);
    } catch (error: any) {
      console.error('Error creating PayPal order:', error);
      res.status(500).json({ error: error.message || 'Failed to create order.' });
    }
  });
});

export const capturePayPalOrder = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    try {
      const { orderID } = req.body;
      if (!orderID) {
        res.status(400).send('Missing orderID');
        return;
      }

      const accessToken = await generateAccessToken();
      const url = `${PAYPAL_API_BASE_URL}/v2/checkout/orders/${orderID}/capture`;

      const response = await axios.post(url, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      res.status(200).json(response.data);
    } catch (error: any) {
      console.error('Error capturing PayPal order:', error);
      res.status(500).json({ error: error.message || 'Failed to capture order.' });
    }
  });
});
