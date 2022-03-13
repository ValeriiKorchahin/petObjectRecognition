import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import {HttpClientModule} from "@angular/common/http";
import {RecognizeComponent} from "./recognize/recognize.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from "./carousel/carousel.component";





@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecognizeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
