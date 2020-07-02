import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Racun } from './racun';
import {StavkaRacuna} from './stavka';
import { Artikal} from './artikal'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class RacunService {

  private racuniUrl = "http://localhost:3000/racun/";
  private stavkeUrl = "http://localhost:3000/stavkaRacuna/";

  constructor(
    private http: HttpClient
  ) { }

  getRacuni(): Observable<Racun[]>{
    return this.http.get<Racun[]>(this.racuniUrl);
  }

  getRacun(id: number): Observable<Racun>{
    return this.http.get<Racun>(this.racuniUrl + id)
  }
  addRacun(racun:Racun):Observable<Racun> {
    return this.http.post<Racun>(this.racuniUrl, racun, httpOptions);
  }

  //Stavke-----------------

  getStavke(): Observable<StavkaRacuna[]>{
    return this.http.get<StavkaRacuna[]>(this.stavkeUrl);
  }
  getStavka(id: number): Observable<StavkaRacuna>{
    return this.http.get<StavkaRacuna>(this.stavkeUrl + id)
  }
  addStavka(stavka:StavkaRacuna):Observable<StavkaRacuna> {
    return this.http.post<StavkaRacuna>(this.stavkeUrl, stavka, httpOptions);
  }

  //------------------------

 deleteRacun(racun:Racun):Observable<Racun> {
  const url = `${this.racuniUrl}/${racun.id}`;
  return this.http.delete<Racun>(url, httpOptions);
}
deleteStavkaRacun(stavkaRacun:StavkaRacuna):Observable<StavkaRacuna> {
  const url = `${this.stavkeUrl}/${stavkaRacun.id}`;
  return this.http.delete<StavkaRacuna>(url, httpOptions);
}
}