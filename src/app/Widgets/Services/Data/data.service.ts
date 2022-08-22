import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getData(apiName: string): Observable<any> {
    return this.httpClient.get(`${environment.apiEndPoint}${apiName}`);
  }

  postData(apiName: string, OBJ: any): Observable<any> {
    return this.httpClient.post(`${environment.apiEndPoint}${apiName}`, OBJ);
  }
  getDataWithParams(APIPath: string, params: HttpParams): any {
    return this.httpClient.get(`${environment.apiEndPoint}${APIPath}`, {params});
  }
}
