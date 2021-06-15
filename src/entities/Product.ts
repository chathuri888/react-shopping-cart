export interface Product {
  id?: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  stock: number;
  isOpen?: boolean;
  onClick?: Function;
  totalPrice: number;
}

export interface ProductRange {
  id: number;
  minPrice: number;
  maxPrice: number;
}
