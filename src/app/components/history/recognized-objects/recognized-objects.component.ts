import { Component, OnInit } from '@angular/core';
import {RecognitionResult} from "../../../models/recognition-result-interface/recognitionResult";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recognized-objects',
  templateUrl: './recognized-objects.component.html',
  styleUrls: ['./recognized-objects.component.css']
})
export class RecognizedObjectsComponent implements OnInit {

  recognizedObjects: RecognitionResult[];

  constructor(private activatedRoute:ActivatedRoute) {}


  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({value}) => this.recognizedObjects = value.content)
  }


}

