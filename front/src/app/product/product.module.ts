import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ProductService } from './product.service';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductsAdminComponent,
    ProductsComponent
  ]
})
export class ProductModule { }
