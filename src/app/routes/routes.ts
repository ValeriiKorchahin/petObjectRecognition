import {Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {RecognizeComponent} from "../components/recognize/recognize.component";
import {HomeComponent} from "../components/home/home.component";
import {MapComponent} from "../components/map/map.component";
import {HistoryComponent} from "../components/history/history.component";
import {RecognizedObjectsComponent} from "../components/recognized-objects/recognized-objects.component";
import {RecognitionResultResolveService} from "../services/recognition/recognition-result-resolve.service";

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
    path:'history', resolve:{value: RecognitionResultResolveService}, component: RecognizedObjectsComponent
  }
]
