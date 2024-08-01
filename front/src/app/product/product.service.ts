import { Injectable } from "@angular/core";
import { IProduct } from "./interface/product.model";
import { Category, InventoryStatus } from "./interface/product.enums";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  // private url: string = "http://localhost:3008/data"; // This is to use the JSON Server
  private url: string = "http://localhost:3000/products"; // This is to use the Nest API
  private isJsonServer: boolean = false;

  constructor() {}

  public async getAllProducts(): Promise<IProduct[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  public async createProduct(product: IProduct): Promise<void> {
    try {
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async updateProduct(product: IProduct): Promise<void> {
    const id = this.isJsonServer ? product.id : product._id;
    await fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  }

  public async deleteOneProduct(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
  }

  public async deleteManyProducts(ids: number[]): Promise<void> {
    if (ids.length === 1) {
      await this.deleteOneProduct(ids[0]);
    }
    if (ids.length > 1) {
      const promises = ids.map((id) => this.deleteOneProduct(id));
      await Promise.all(promises);
    }
  }
}
