import {Injectable} from '@angular/core';
import {DataService} from "../../Widgets/Services/Data/data.service";
import {Observable} from "rxjs";
import {IProduct} from "../../Models/Interfaces/Product/product";
import {APIName} from "../../Widgets/Models/StaticData/API-Name/API-Name";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService: DataService) {
  }

  getProductList(): Observable<IProduct[]> {
    return this.dataService.getData(APIName.product.product)
  }

  getProductDetails(productId: number): Observable<IProduct> {
    return this.dataService.getData(APIName.product.product + '/' + productId)
  }
}
