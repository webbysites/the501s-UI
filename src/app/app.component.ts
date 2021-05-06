import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The 501s';
  isScrolled = false;



  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public _router: Router
    ) {
    this.matIconRegistry.addSvgIcon(
      'contact',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/contact.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'home',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/home.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'about',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/about.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/calendar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'vote',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/vote.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'thumb-up',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/thumb-up.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'email',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/email.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'send',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/send.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'person',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/person.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'message',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/icons/message.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'rivet',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/501s-button_texture.svg')
    )


  }

  ngOnInit() {

  }

   openNav() {
    document.getElementById('mySidebar').style.width = '100%';
  }


  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }



}
