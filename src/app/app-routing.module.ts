import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatesComponent } from './dates/dates.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'dates', component: DatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
