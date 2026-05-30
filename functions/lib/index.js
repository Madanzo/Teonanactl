"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.capturePayPalOrder = exports.createPayPalOrder = void 0;
const functions = __importStar(require("firebase-functions"));
const axios_1 = __importDefault(require("axios"));
const cors = require("cors");
const data_1 = require("./data");
const corsHandler = cors({ origin: true });
// PayPal environment config
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_API_BASE_URL = 'https://api-m.sandbox.paypal.com', PARTNER_PAYPAL_EMAIL } = process.env;
/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 */
async function generateAccessToken() {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
        throw new Error('MISSING_API_CREDENTIALS');
    }
    const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_CLIENT_SECRET).toString('base64');
    const response = await axios_1.default.post(`${PAYPAL_API_BASE_URL}/v1/oauth2/token`, 'grant_type=client_credentials', {
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
function calculateOrderAmount(cart) {
    const SHIPPING_COST = 130;
    let total = SHIPPING_COST;
    cart.forEach(item => {
        // Find product securely from our database
        const product = data_1.products.find(p => p.id === item.id);
        if (!product)
            throw new Error(`Product not found: ${item.id}`);
        const variation = product.variations.find((v) => v.id === item.variationId);
        if (!variation)
            throw new Error(`Variation not found: ${item.variationId}`);
        total += variation.price * item.quantity;
    });
    return total;
}
exports.createPayPalOrder = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        if (req.method === 'OPTIONS') {
            res.status(204).send('');
            return;
        }
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
            // 4. Optionally inject Partner Platform Fee (15% commission split)
            if (PARTNER_PAYPAL_EMAIL) {
                const platformFee = Math.round(totalAmount * 0.15 * 100) / 100;
                payload.purchase_units[0].payment_instruction = {
                    disbursement_mode: 'INSTANT',
                    platform_fees: [
                        {
                            amount: {
                                currency_code: 'MXN',
                                value: platformFee.toFixed(2),
                            },
                            payee: {
                                email_address: PARTNER_PAYPAL_EMAIL,
                            },
                        },
                    ],
                };
            }
            const response = await axios_1.default.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            res.status(200).json(response.data);
        }
        catch (error) {
            console.error('Error creating PayPal order:', error);
            res.status(500).json({ error: error.message || 'Failed to create order.' });
        }
    });
});
exports.capturePayPalOrder = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        if (req.method === 'OPTIONS') {
            res.status(204).send('');
            return;
        }
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
            const response = await axios_1.default.post(url, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            res.status(200).json(response.data);
        }
        catch (error) {
            console.error('Error capturing PayPal order:', error);
            res.status(500).json({ error: error.message || 'Failed to capture order.' });
        }
    });
});
//# sourceMappingURL=index.js.map