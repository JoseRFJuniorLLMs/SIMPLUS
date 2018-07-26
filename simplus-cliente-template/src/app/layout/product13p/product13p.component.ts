import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product13p',
  templateUrl: './product13p.component.html',
  styleUrls: ['./product13p.component.scss']
})
export class Product13pComponent implements OnInit {

  products: Product[];

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts14PROE1().subscribe(data => {
      this.products = data;
    });
  }
}