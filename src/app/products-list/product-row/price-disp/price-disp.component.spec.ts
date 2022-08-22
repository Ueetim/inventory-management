import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDispComponent } from './price-disp.component';

describe('PriceDispComponent', () => {
  let component: PriceDispComponent;
  let fixture: ComponentFixture<PriceDispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceDispComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
