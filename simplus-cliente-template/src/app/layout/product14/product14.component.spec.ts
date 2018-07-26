import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product14Component } from './product14.component';

describe('Product14Component', () => {
  let component: Product14Component;
  let fixture: ComponentFixture<Product14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
