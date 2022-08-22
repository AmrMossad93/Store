import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProductService} from "../../Services/Product/product.service";
import {IProduct} from "../../Models/Interfaces/Product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolver implements Resolve<IProduct> {
  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    // @ts-ignore
    let productId = +route.paramMap.get('productId')
    return this.productService.getProductDetails(productId)
  }
}
