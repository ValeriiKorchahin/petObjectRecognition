import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {RecognizeComponent} from "./components/recognize/recognize.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from "./components/carousel/carousel.component";
import {routes} from "./routes/routes";
import { HomeComponent } from './components/home/home.component';
import {NgxDropzoneModule} from "ngx-dropzone";
import { MapComponent } from './components/map/map.component';
import {AgmCoreModule} from "@agm/core";






@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecognizeComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NgxDropzoneModule,
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyD11pw-U4old6Bl-GonNGzZ6M7GvNX0PnI'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
