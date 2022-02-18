import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from './part';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http: HttpClient) { }

  getAllParts(): Observable<Part[]>{
    return this.http.get<Part[]>('http://localhost:53524/Api/Part/Get');
  }

  getPart(Id: string): Observable<Part> {  
    return this.http.get<Part>('http://localhost:53524/Api/Part/Get/' + Id);  
  }

  setPart(part:Part): Observable<Part>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Part>('http://localhost:53524/Api/Part/Set', part, httpOptions);
  }

  updatePart(part:Part): Observable<Part>{  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Part>('http://localhost:53524/Api/Part/Update', part, httpOptions);
  }

  deletePart(partid:string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.delete<number>('http://localhost:53524/Api/Part/Delete?Id=' + partid, httpOptions);  
  }
}
