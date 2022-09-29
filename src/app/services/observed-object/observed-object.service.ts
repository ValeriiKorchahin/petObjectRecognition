import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IObservedObject} from "../../models/observed-object-interface/iobserved-object";

@Injectable({
  providedIn: 'root'
})
export class ObservedObjectService {

  private url = 'http://localhost:8080/observedObject'

  private headers = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpYXQiOjE2NjM1OTQ2NDksImV4cCI6MTY2NDc0NDQwMH0.3tGWogD05aowREgt8xTbfary1CUHuVC4OqlnTki140U'
  })

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IObservedObject> {
    return this.httpClient.get<IObservedObject>(this.url, {headers: this.headers})
  }

}
