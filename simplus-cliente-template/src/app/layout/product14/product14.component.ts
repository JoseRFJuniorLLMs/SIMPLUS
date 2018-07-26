import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product14',
  templateUrl: './product14.component.html',
  styleUrls: ['./product14.component.scss']
})
export class Product14Component implements OnInit {


  products: Product[];

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts14().subscribe(data => {
      this.products = data;
    });
  }
}