import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Artikal } from './artikal';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ArtikalService {

  private artikliUrl = "http://localhost:3000/artikal/";

  constructor(
    private http: HttpClient
  ) { }

  getArtikli(): Observable<Artikal[]>{
    return this.http.get<Artikal[]>(this.artikliUrl);
  }

  getArtikal(id: number): Observable<Artikal>{
    return this.http.get<Artikal>(this.artikliUrl + id)
  }
  addArtikal(artikal:Artikal):Observable<Artikal> {
    return this.http.post<Artikal>(this.artikliUrl, artikal, httpOptions);
  }
 deleteArtikal(artikal:Artikal):Observable<Artikal> {
  const url = `${this.artikliUrl}/${artikal.id}`;
  return this.http.delete<Artikal>(url, httpOptions);
}
}
