import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  getAllRegions(): Observable<Region[]>{
    return this.http.get<Region[]>('http://localhost:53524/Api/Region');
  }
}
