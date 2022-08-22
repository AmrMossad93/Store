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
export class ProductListResolver implements Resolve<IProduct[]> {
  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
    return this.productService.getProductList()
  }
}
