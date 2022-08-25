import { Component, Input } from '@angular/core';
// import { Product } from '../../../product.model';
import { Product } from "../../../product.model";

@Component({
  selector: 'app-product-dept',
  templateUrl: './product-dept.component.html',
  styleUrls: ['./product-dept.component.css']
})
export class ProductDeptComponent {
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
