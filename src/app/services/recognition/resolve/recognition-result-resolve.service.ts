import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {RecognitionResult} from "../../../models/recognition-result-interface/recognitionResult";
import {Observable} from "rxjs";
import {RecognitionResultService} from "../recognition-result.service";

@Injectable({
  providedIn: 'root'
})
export class RecognitionResultResolveService implements Resolve<RecognitionResult>{

  constructor(private recognitionResultService:RecognitionResultService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecognitionResult> | Promise<RecognitionResult> | RecognitionResult {
    return this.recognitionResultService.getAllRecognitionResults()
  }
}
