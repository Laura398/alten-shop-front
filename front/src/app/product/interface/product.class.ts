import { Category, InventoryStatus } from "./product.enums";

export class Product {
    id?: number;
    code: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inventoryStatus: InventoryStatus;
    category: Category;
    image: string;
    rating: number;
  }