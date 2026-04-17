export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  category?: Category;
  price: number;
  discount_percentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation?: string;
  shipping_information?: string;
  availability_status?: string;
  reviews?: {
    rating: number;
    comment: string;
    date: string;
    reviewer_name: string;
    reviewer_email: string;
  }[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode?: string;
    qrCode?: string;
  };
  images: string[];
  image?: string;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

import { LucideIcon } from "lucide-react";
export interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  color: "purple" | "blue" | "green" | "yellow" | "red";
}
export interface CartItem {
  product: Product;
  quantity: number;
}
export interface CartStore {
  cartItems: CartItem[];
  addProduct: (cartItem: CartItem) => void;
  deleteProduct: (product: Product) => void;
  incrementQuantity: (cartItem: CartItem) => void;
  decrementQuantity: (cartItem: CartItem) => void;
}
