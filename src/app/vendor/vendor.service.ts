import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  getAllVendors(): Observable<Vendor[]>{
    return this.http.get<Vendor[]>('http://localhost:53524/Api/Vendor/Get');
  }

  getVendor(Id: string): Observable<Vendor> {  
    return this.http.get<Vendor>('http://localhost:53524/Api/Vendor/Get/' + Id);  
  }

  setVendor(vendor:Vendor): Observable<Vendor>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Vendor>('http://localhost:53524/Api/Vendor/Set', vendor, httpOptions);
  }

  updateVendor(vendor:Vendor): Observable<Vendor>{  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Vendor>('http://localhost:53524/Api/Vendor/Update', vendor, httpOptions);
  }

  deleteVendor(vendorid:string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.delete<number>('http://localhost:53524/Api/Vendor/Delete?Id=' + vendorid, httpOptions);  
  }
}
