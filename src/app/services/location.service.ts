import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MlLocation} from "../models/mlLocation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url = 'http://localhost:8080/location';

  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpYXQiOjE2NjM1OTQ2NDksImV4cCI6MTY2NDc0NDQwMH0.3tGWogD05aowREgt8xTbfary1CUHuVC4OqlnTki140U'
  })

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<MlLocation> {
    return this.httpClient.get<MlLocation>(this.url, {headers: this.httpHeaders})
  }

}
