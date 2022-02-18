import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseOrder } from './purchase-order';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(private http: HttpClient) { }

  getAllPurchaseOrders(): Observable<PurchaseOrder[]>{
    return this.http.get<PurchaseOrder[]>('http://localhost:53524/Api/PurchaseOrder/Get');
  }

  getPurchaseOrder(Id: string): Observable<PurchaseOrder> {  
    return this.http.get<PurchaseOrder>('http://localhost:53524/Api/PurchaseOrder/Get/' + Id);  
  }

  setPurchaseOrder(purchaseorder:PurchaseOrder): Observable<PurchaseOrder>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<PurchaseOrder>('http://localhost:53524/Api/PurchaseOrder/Set', purchaseorder, httpOptions);
  }

  updatePurchaseOrder(purchaseorder:PurchaseOrder): Observable<PurchaseOrder>{  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<PurchaseOrder>('http://localhost:53524/Api/PurchaseOrder/Update', purchaseorder, httpOptions);
  }

  deletePurchaseOrder(purchaseorderid:string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.delete<number>('http://localhost:53524/Api/PurchaseOrder/Delete?Id=' + purchaseorderid, httpOptions);  
  }
}
