export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  affiliateLink: string;
}

export const CATEGORIES = [
  "Electronics",
  "Home",
  "Clothing",
  "Beauty",
  "Sports",
  "Books"
];
