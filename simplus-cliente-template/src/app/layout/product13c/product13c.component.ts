import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product13c',
  templateUrl: './product13c.component.html',
  styleUrls: ['./product13c.component.scss']
})
export class Product13cComponent implements OnInit {

  products: Product[];

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts14CXE1().subscribe(data => {
      this.products = data;
    });
  }
}