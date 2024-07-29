import { Injectable } from "@angular/core";
import { IProduct } from "./interface/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private url: string = "http://localhost:3008/data"; // This will be replaced by the API URL

  constructor() {}

  public async getAllProducts(): Promise<IProduct[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  public async createProduct(product: IProduct): Promise<void> {
    await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  }

  public async updateProduct(id: number, product: IProduct): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: "PUT",
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
