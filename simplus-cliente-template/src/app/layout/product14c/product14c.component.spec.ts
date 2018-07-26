import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product14cComponent } from './product14c.component';

describe('Product14Component', () => {
  let component: Product14cComponent;
  let fixture: ComponentFixture<Product14cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product14cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product14cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
