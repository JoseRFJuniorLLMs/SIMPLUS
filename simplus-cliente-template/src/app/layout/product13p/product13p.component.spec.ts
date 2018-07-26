import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product13pComponent } from './product13p.component';

describe('Product13Component', () => {
  let component: Product13pComponent;
  let fixture: ComponentFixture<Product13pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product13pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product13pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
