import {Component, Input, OnInit} from '@angular/core';
import { RecognitionResult} from "../../../models/recognition-result-interface/recognitionResult";

@Component({
  selector: 'app-recognized-object',
  templateUrl: './recognized-object.component.html',
  styleUrls: ['./recognized-object.component.css']
})
export class RecognizedObjectComponent implements OnInit {



  @Input()
  recognizedObject: RecognitionResult

  constructor() { }

  ngOnInit(): void {
  }

}
