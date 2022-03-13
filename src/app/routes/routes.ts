import {Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {RecognizeComponent} from "../recognize/recognize.component";

export const routes: Routes = [
  {
    path:'', component: AppComponent
  },
  {
    path:'recognize', component: RecognizeComponent
  }
]
