import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  // te product[] passed to us
  @Input() productList!: Product[];

  // outputs the current product whenever a product is selected
  @Output() onProductSelected: EventEmitter<Product>;

  // contains the currently selected product
  private currentProduct!: Product;
  
  constructor() {
    this.onProductSelected = new EventEmitter();
    // this.currentProduct = '';
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  // ngOnInit(): void {
  // }

}
