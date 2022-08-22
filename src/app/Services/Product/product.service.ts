import {Injectable} from '@angular/core';
import {DataService} from "../../Widgets/Services/Data/data.service";
import {Observable} from "rxjs";
import {IProduct} from "../../Models/Interfaces/Product/product";
import {APIName} from "../../Widgets/Models/StaticData/API-Name/API-Name";
import {IAddEditProduct} from "../../Models/Interfaces/Product/add-edit-product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productOBJ = {} as IAddEditProduct;

  constructor(private dataService: DataService) {
  }

  getProductList(): Observable<IProduct[]> {
    return this.dataService.getData(APIName.product.product)
  }

  getProductDetails(productId: number): Observable<IProduct> {
    return this.dataService.getData(APIName.product.product + '/' + productId)
  }

  onAddProduct(): Observable<IProduct> {
    return this.dataService.postData(APIName.product.product, this.productOBJ)
  }
}
