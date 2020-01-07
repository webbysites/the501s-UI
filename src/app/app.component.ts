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
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/customIcons/contact')
    );
    this.matIconRegistry.addSvgIcon(
      'home',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assests/customIcons/home')
    );
    this.matIconRegistry.addSvgIcon(
      'about',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/customIcons/about')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/customIcons/calendar')
    );
    this.matIconRegistry.addSvgIcon(
      'voting',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/customIcons/voting')
    );
    this.matIconRegistry.addSvgIcon(
      'thumb-up',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/customIcons/thumb-up')
    );

  }





}
