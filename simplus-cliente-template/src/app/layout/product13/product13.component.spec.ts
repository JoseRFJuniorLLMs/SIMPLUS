import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product13Component } from './product13.component';

describe('Product13Component', () => {
  let component: Product13Component;
  let fixture: ComponentFixture<Product13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
