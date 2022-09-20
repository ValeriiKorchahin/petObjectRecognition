import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontproject';

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {
  }

  goToRecognizePage(): void {
    this.router.navigate(['/recognize'], {relativeTo: this.activatedRoute})
  }

  goToHomePage(): void {
    this.router.navigate([''], {relativeTo: this.activatedRoute})
  }

  goToMapPage(): void {
    this.router.navigate(['/map'], {relativeTo:this.activatedRoute})
  }

  gotoHistoryPage() {
    this.router.navigate(['/history'], {relativeTo: this.activatedRoute})
  }
}
