import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { DatePipe } from '@angular/common';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DatesComponent } from './dates/dates.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { VotingComponent } from './voting/voting.component';
import { AboutComponent } from './about/about.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DateModalComponent } from './modals/date-modal/date-modal.component';
import { VotingResponseModalComponent } from './modals/voting-response-modal/voting-response-modal.component';
import { ContactResponseModalComponent } from './modals/contact-response-modal/contact-response-modal.component';
import { RequestResponseModalComponent } from './modals/request-response-modal/request-response-modal.component';
import { RequestModalComponent } from './modals/request-modal/request-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DatesComponent,
    ContactComponent,
    LandingPageComponent,
    SidenavComponent,
    VotingComponent,
    AboutComponent,
    SideNavComponent,
    FooterComponent,
    DateModalComponent,
    VotingResponseModalComponent,
    ContactResponseModalComponent,
    RequestResponseModalComponent,
    RequestModalComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    DateModalComponent,
    ContactResponseModalComponent,
    VotingResponseModalComponent,
    RequestModalComponent,
    RequestResponseModalComponent
  ]
})
export class AppModule { }
