import {Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {RecognizeComponent} from "../components/recognize/recognize.component";
import {HomeComponent} from "../components/home/home.component";
import {MapComponent} from "../components/map/map.component";

export const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'recognize', component: RecognizeComponent
  },
  {
    path:'map', component: MapComponent
  }
]
