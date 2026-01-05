export interface ProductVariation {
  id: string;
  sku: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  inventoryQuantity: number;
  attributes: {
    quantity: number;
    unit: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  basePrice: number;
  category: 'thc' | 'cacao' | 'accessories';
  tags: string[];
  featuredImage: string;
  gallery: string[];
  variations: ProductVariation[];
  trackInventory: boolean;
  status: 'draft' | 'active' | 'archived';
  featured: boolean;
}

export interface CartItem {
  productId: string;
  variationId: string;
  product: Product;
  variation: ProductVariation;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}
