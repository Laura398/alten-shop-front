import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "./interface/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private url: string = "./assets/products.json"; // This will be replaced by the API URL

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<{ data: Product[] }>(this.url).pipe(
      map((products: { data: Product[] }) => {
        return products.data;
      })
    );
  }
}
