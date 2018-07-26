import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product13',
  templateUrl: './product13.component.html',
  styleUrls: ['./product13.component.scss']
})
export class Product13Component implements OnInit {

  products: Product[];

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts13().subscribe(data => {
      this.products = data;
    });
  }
}