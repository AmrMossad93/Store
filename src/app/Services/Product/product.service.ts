import {Injectable} from '@angular/core';
import {DataService} from "../../Widgets/Services/Data/data.service";
import {Observable} from "rxjs";
import {IProduct} from "../../Models/Interfaces/Product/product";
import {APIName} from "../../Widgets/Models/StaticData/API-Name/API-Name";
import {IAddEditProduct} from "../../Models/Interfaces/Product/add-edit-product";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productOBJ = {} as IAddEditProduct;
  productListLimit: number = 10;

  constructor(private dataService: DataService) {
  }

  getProductList(): Observable<IProduct[]> {
    let params = new HttpParams();
    params = params.append('limit', this.productListLimit);
    return this.dataService.getDataWithParams(APIName.product.product, params)
  }

  getProductDetails(productId: number): Observable<IProduct> {
    return this.dataService.getData(APIName.product.product + '/' + productId)
  }

  onAddProduct(): Observable<IProduct> {
    return this.dataService.postData(APIName.product.product, this.productOBJ)
  }
}
