import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product14pComponent } from './product14p.component';

describe('Product14Component', () => {
  let component: Product14pComponent;
  let fixture: ComponentFixture<Product14pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product14pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product14pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
