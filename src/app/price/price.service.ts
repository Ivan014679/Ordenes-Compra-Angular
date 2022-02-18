import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Price } from './price';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  getAllPrices(): Observable<Price[]>{
    return this.http.get<Price[]>('http://localhost:53524/Api/Price/Get');
  }

  getPrice(Vendor: number, Part: number): Observable<Price> {  
    return this.http.get<Price>('http://localhost:53524/Api/Price/Get/' + Vendor + '-' + Part);  
  }

  setPrice(price:Price): Observable<Price>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Price>('http://localhost:53524/Api/Price/Set', price, httpOptions);
  }

  updatePrice(price:Price): Observable<Price>{  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Price>('http://localhost:53524/Api/Price/Update', price, httpOptions);
  }

  deletePrice(vendor:string, part:string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.delete<number>('http://localhost:53524/Api/Price/Delete?Vendor=' + vendor + '&Part=' + part, httpOptions);  
  }
}
