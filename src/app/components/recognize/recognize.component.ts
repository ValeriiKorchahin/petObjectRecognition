import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-recognize',
  templateUrl: './recognize.component.html',
  styleUrls: ['./recognize.component.css']
})
export class RecognizeComponent implements OnInit {

  files: File[] = [];

  recognizeFormGroup: FormGroup = new FormGroup({
    latitude: new FormControl('48.079616'),
    longitude: new FormControl('38.431955'),
    description: new FormControl('description'),
    model: new FormControl('model')

      })

      onSelect(event: any) {
        console.log(event);
        this.files.push(...event.addedFiles);
      }

      onRemove(event: any) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
      }

      constructor() { }

      ngOnInit(): void {
      }

      save() {

      }
    }
