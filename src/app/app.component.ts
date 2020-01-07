import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The 501s';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    this.matIconRegistry.addSvgIcon(
      'contact',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/customIcons/contact.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'home',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/home.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'about',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/customIcons/about.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/customIcons/calendar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'vote',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/customIcons/vote.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'thumb-up',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/customIcons/thumb-up.svg')
    );

  }





}
