import { Category, InventoryStatus } from "./product.enums";

export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: Category;
    quantity: number;
    inventoryStatus: InventoryStatus;
    rating: number;
  }