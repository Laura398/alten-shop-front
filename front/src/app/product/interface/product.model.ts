import { CrudItemOptions } from "app/shared/utils/crud-item-options/crud-item-options.model";
import { Category, InventoryStatus } from "./product.enums";

export interface IProduct {
  id?: number;
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

export interface IProductOptions {
  code: CrudItemOptions;
  name: CrudItemOptions;
  description: CrudItemOptions;
  image: CrudItemOptions;
  price: CrudItemOptions;
  category: CrudItemOptions;
  quantity: CrudItemOptions;
  inventoryStatus: CrudItemOptions;
  rating: CrudItemOptions;
}