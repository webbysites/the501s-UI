import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatesComponent } from './dates/dates.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { VotingComponent } from './voting/voting.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'dates', component: DatesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'voting', component: VotingComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
