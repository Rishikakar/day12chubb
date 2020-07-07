import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }
  productData
  productid;
  getService(): Observable<any> {
    return this.http.get(
      "https://5f04d0368b06d60016ddf0e7.mockapi.io/users"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }
  







}