import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private matIconRegistry: MatIconRegistry,
            private domSanitizer: DomSanitizer) {
              this.matIconRegistry.addSvgIcon(
                'earthquake',
                this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/earthquake.svg')
              );
             }

}
