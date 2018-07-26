import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product14c',
  templateUrl: './product14c.component.html',
  styleUrls: ['./product14c.component.scss']
})
export class Product14cComponent implements OnInit {

  products: Product[];

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts14CXE2().subscribe(data => {
      this.products = data;
    });
  }
}