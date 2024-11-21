export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ean: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}