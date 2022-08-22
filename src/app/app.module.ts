import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductRowComponent } from './products-list/product-row/product-row.component';
import { ProductImageComponent } from './products-list/product-row/product-image/product-image.component';
import { ProductDeptComponent } from './products-list/product-row/product-dept/product-dept.component';
import { PriceDispComponent } from './products-list/product-row/price-disp/price-disp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsListComponent,
    BreadcrumbsComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDeptComponent,
    PriceDispComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
