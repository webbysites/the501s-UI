import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatesComponent } from 'src/app/dates/dates.component';
import { the501sEvents } from '../the501sEvents';
import { DateModalComponent } from '../modals/date-modal/date-modal.component';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  randomNumber1: number;
  randomNumber2: number;

  events = the501sEvents;

  dialogSubscription: Subscription;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.generateRanking(4, 18);
    console.log(this.events);
  }

  generateRanking(min, max) {
    this.randomNumber1 =  Math.floor(Math.random() * (max - min + 1) + min);
    console.log(this.randomNumber1);
    this.randomNumber2 = this.randomNumber1 + 1;

  }

  openModal() {
    this.events.forEach(e => {
      console.log(e);
      const dialogRef = this.dialog.open(DateModalComponent, {
        data: {
          title: e.title,
          date: e.date,
          start: e.start,
          end: e.end,
          location: e.location,
          description: e.description,
          img: e.img
        }
      });
      this.dialogSubscription = dialogRef.afterClosed().subscribe(result => {

      });
    });

  }

  ngOnDestroy() {
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }

}
