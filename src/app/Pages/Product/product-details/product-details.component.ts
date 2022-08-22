import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../Models/Interfaces/Product/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product = {} as IProduct
  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.product = res['productDetails'];
    })
  }

}
