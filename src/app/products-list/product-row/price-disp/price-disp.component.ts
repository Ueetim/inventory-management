import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-disp',
  templateUrl: './price-disp.component.html',
  styleUrls: ['./price-disp.component.css']
})
export class PriceDispComponent {
  @Input() price!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
