import {Component, EventEmitter, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecognitionResult} from "../../models/recognition-result-interface/recognitionResult";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapItem: RecognitionResult[];
  filteredItemsByModel: RecognitionResult[];
  isFilterButtonClicked: boolean;
  selectedModel = 'All'

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
     this.activatedRoute.data.subscribe(({value}) => {
       this.mapItem = value.content;
       this.filteredItemsByModel = value.content
     })
  }

  showFilters(): void {
    this.isFilterButtonClicked = true;
  }

  changedValue: EventEmitter<string> = new EventEmitter<string>();

  changeByModelName() {
    this.changedValue.emit(this.selectedModel)

    if(this.selectedModel === 'All') {
      this.mapItem = this.filteredItemsByModel
    }
      else if(this.selectedModel === 'Tank'){
       this.mapItem =  this.filteredItemsByModel.filter(item => {return item.mlModel.modelName === 'TANK_model'})
      }
      else if(this.selectedModel === 'APC'){
        this.mapItem = this.filteredItemsByModel.filter(item => {return item.mlModel.modelName === 'APC_model'})
    }

    }

}
