import { Component, OnInit } from "@angular/core";
import { ControlType } from "app/shared/utils/crud-item-options/control-type.model";
import { CrudItemOptions } from "app/shared/utils/crud-item-options/crud-item-options.model";
import { Product } from "../interface/product.class";
import { IProduct, IProductOptions } from "../interface/product.model";
import { ProductService } from "../product.service";
import { Category, InventoryStatus } from "../interface/product.enums";
import { PRODUCT_OPTIONS } from "../PRODUCT_OPTIONS";

@Component({
  selector: "app-products-admin",
  templateUrl: "./products-admin.component.html",
  styleUrls: ["./products-admin.component.scss"],
})
export class ProductsAdminComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  products: IProduct[] = [];
  product = Product;
  options: CrudItemOptions[];
  productsOptions: IProductOptions = PRODUCT_OPTIONS;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().then((products: IProduct[]) => {
      this.products = products;

      if (products.length) {
        this.initializeOptions();
      }
    });
  }

  initializeOptions() {
    this.options = [
      this.productsOptions.code,
      this.productsOptions.name,
      this.productsOptions.description,
      this.productsOptions.image,
      this.productsOptions.price,
      this.productsOptions.category,
      this.productsOptions.quantity,
      this.productsOptions.inventoryStatus,
      this.productsOptions.rating,
    ];
  }

  saveProduct(product: Product): void {
    console.log();

    if (product.id) {
      this.productService
        .updateProduct(product.id, product)
        .then(() => {
          this.getAllProducts();
        });
    } else {
      this.productService
        .createProduct(product)
        .then(() => {
          this.getAllProducts();
        });
    }
  }

  removeProduct(ids: number[]): void {    
    this.productService.deleteManyProducts(ids).then(() => {
      this.getAllProducts();
    });
  }
}
