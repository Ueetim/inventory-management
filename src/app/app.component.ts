import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'CAP',
        'Black Baseball Cap',
        '/assets/images/black-hat-removebg-preview.png',
        ['Men', 'Apparel', 'Headgear'],
        1200.00
      ),
      new Product(
        'SHOES',
        'Black Running Shoes',
        '/assets/images/black-shoe-removebg-preview.png',
        ['Men', 'Footwear', 'Shoes'],
        4500
      ),
      new Product(
        'WATCH',
        'Blue Watch',
        '/assets/images/blue-watch.png',
        ['Men', 'Accessories', 'Jewelleries'],
        1000.00
      ),
      new Product(
        'SHIRT',
        'Green Shirt',
        '/assets/images/green-shirt.png',
        ['Men', 'Apparel', 'Jackets & Vests'],
        1500.00
      ),
      new Product(
        'SHOES',
        'Red Shoes',
        '/assets/images/red-shoe.png',
        ['Women', 'Footwear', 'Shoes'],
        2000.00
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
