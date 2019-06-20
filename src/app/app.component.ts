import { Component } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Earthquake positioning system';
  description = 'This application give you the position of all the earthquake searched by date and magnitude';

  constructor(private router: Router,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

                this.matIconRegistry.addSvgIcon(
                  'home',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/home.svg')
                );

                this.matIconRegistry.addSvgIcon(
                  'map',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/map.svg')
                );

                this.matIconRegistry.addSvgIcon(
                  'form',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/form.svg')
                );

              }

  onTabChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'home') {
      this.router.navigateByUrl('home');
    } else if ($event.nextId === 'form') {
      this.router.navigateByUrl('form');
    } else if ($event.nextId === 'map') {
      this.router.navigateByUrl('map');
    }
  }
}
