import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecognitionResult} from "../../../../models/recognition-result-interface/recognitionResult";
import {ObservedObjectService} from "../../../../services/observed-object/observed-object.service";
import {IObservedObject} from "../../../../models/observed-object-interface/iobserved-object";




@Component({
  selector: 'app-recognized-object-details',
  templateUrl: './recognized-object-details.component.html',
  styleUrls: ['./recognized-object-details.component.css']
})
export class RecognizedObjectDetailsComponent implements OnInit {

  recognizedObject: RecognitionResult
  observedObject: IObservedObject[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private objectService:ObservedObjectService
  ) {

    this.activatedRoute.params.subscribe(({id}) => {
      this.activatedRoute.data.subscribe(({value}) => this.recognizedObject = value)
    })

    this.objectService.getAll().subscribe(value => this.observedObject = value.content)

  }


  ngOnInit(): void {
  }


}

