import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecognitionResult} from "../../../../models/recognitionResult";


@Component({
  selector: 'app-recognized-object-details',
  templateUrl: './recognized-object-details.component.html',
  styleUrls: ['./recognized-object-details.component.css']
})
export class RecognizedObjectDetailsComponent implements OnInit {

  recognizedObject: RecognitionResult

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.activatedRoute.data.subscribe(({value}) => this.recognizedObject = value )
    })
  }

  ngOnInit(): void {
  }

}
