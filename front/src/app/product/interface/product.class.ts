import { Category, InventoryStatus } from "./product.enums";

export class Product {
  _id?: string;
  id?: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: InventoryStatus;
  category: Category;
  image?: string;
  rating?: number;
}
