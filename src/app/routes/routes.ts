import {Routes} from "@angular/router";
import {RecognizeComponent} from "../components/recognize/recognize.component";
import {HomeComponent} from "../components/home/home.component";
import {MapComponent} from "../components/map/map.component";
import {RecognizedObjectsComponent} from "../components/history/recognized-objects/recognized-objects.component";
import {RecognitionResultResolveService} from "../services/recognition/resolve/recognition-result-resolve.service";
import {
  RecognizedObjectDetailsComponent
} from "../components/history/recognized-object/recognized-object-details/recognized-object-details.component";
import {HistoryComponent} from "../components/history/history.component";
import {RecognitionResultResolveIdService} from "../services/recognition/resolve/recognition-result-resolve-id.service";


export const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'recognize', component: RecognizeComponent
  },
  {
    path:'map', component: MapComponent
  },
  {
    path:'history', component: HistoryComponent, children: [
      {
      path: '', resolve: {value: RecognitionResultResolveService}, component: RecognizedObjectsComponent
    },
      {
        path: ':id', resolve: {value: RecognitionResultResolveIdService}, component: RecognizedObjectDetailsComponent
      }
    ]
  }
]
