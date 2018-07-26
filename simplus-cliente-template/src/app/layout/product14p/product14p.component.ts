import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product14p',
  templateUrl: './product14p.component.html',
  styleUrls: ['./product14p.component.scss']
})
export class Product14pComponent implements OnInit {

  products: Product[];

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts14PROE2().subscribe(data => {
      this.products = data;
    });
  }
}