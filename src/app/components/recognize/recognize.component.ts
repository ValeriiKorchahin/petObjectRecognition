import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recognize',
  templateUrl: './recognize.component.html',
  styleUrls: ['./recognize.component.css']
})
export class RecognizeComponent implements OnInit {

  condition: boolean

  files: File[] = [];

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


  recognizeFormGroup: FormGroup = new FormGroup({
    latitude: new FormControl('',[
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9)
    ]),
    longitude: new FormControl('',[
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    model: new FormControl('', [
      Validators.required
    ])
  })

  getControl(control: any) {
        return this.recognizeFormGroup.get(control)
  }

      save() {
        console.log(this.recognizeFormGroup)
      }
    }
