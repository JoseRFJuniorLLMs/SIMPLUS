import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product13cComponent } from './product13c.component';

describe('Product13Component', () => {
  let component: Product13cComponent;
  let fixture: ComponentFixture<Product13cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product13cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product13cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
