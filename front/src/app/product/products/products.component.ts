import { Component, OnInit } from "@angular/core";
import { SearchParams } from "app/shared/ui/list/search.model";
import { SelectItem } from "primeng/api";
import { FILTER_OPTIONS } from "../FILTER_OPTIONS";
import { InventoryStatus } from "../interface/product.enums";
import { Product } from "../interface/product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  products: Product[] = [];
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
      .subscribe((products: Product[]) => (this.products = products));
  }
}
