import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { FILTER_OPTIONS } from "../FILTER_OPTIONS";
import { InventoryStatus } from "../interface/product.enums";
import { IProduct } from "../interface/product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  products: IProduct[] = [];
  inventoryStatus = InventoryStatus;
  options: SelectItem[] = FILTER_OPTIONS;
  _isMobileDisplay: boolean = false;

  ngOnInit(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this._isMobileDisplay = true;
    }
    this.productService
      .getAllProducts()
      .then((products: IProduct[]) => (this.products = products));
  }
}
