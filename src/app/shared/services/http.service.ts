import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PATIENT_URLS } from '../constants/patients.constants';
import { ORDERS_URL } from '../constants/orders.constants';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  getPatients(): Observable<any> {
    return this.httpClient.get(PATIENT_URLS).pipe();
  }
  
  getOrders(): Observable<any> {
    return this.httpClient.get(ORDERS_URL)
  }
}
