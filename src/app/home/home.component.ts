import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatesComponent } from 'src/app/dates/dates.component';
import { the501sEvents } from '../the501sEvents';
import { DateModalComponent } from '../modals/date-modal/date-modal.component';
import { MatDialog } from '@angular/material';
import { Subscription, fromEvent, timer } from 'rxjs';
import { take, switchMap, mapTo, startWith, scan, takeWhile, tap } from 'rxjs/operators';

let currentNumber: any = 0;

const takeUntilFunction = (endRange, currentNumber) => {
  return endRange > currentNumber
  ? val => val <= endRange
  : val => val >= endRange;
};

const positiveOrNegative = (endRange, currentNumber) => {
  return endRange > currentNumber ? 1 : -1;
};

const updateHTML = id => val => (document.getElementById(id).innerHTML = val);

// streams
const enter1$ = fromEvent(window, 'load');
const enter2$ = fromEvent(window, 'load');



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  randomNumber1: number;
  randomNumber2: number;

  private subscription1: Subscription;
  private subscription2: Subscription;

  events = the501sEvents;

  dialogSubscription: Subscription;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.generateRanking(4, 18);

    this.subscription1 = enter1$.pipe(
      take(1),
      switchMap(endRange => {
        return timer(0, 100).pipe(
          mapTo(positiveOrNegative(this.randomNumber1, currentNumber)),
          startWith(currentNumber),
          scan((acc, curr) => acc + curr),
          takeWhile(takeUntilFunction(this.randomNumber1, currentNumber))
        )
      }),
      tap(v => (currentNumber = v)),
      startWith(currentNumber)
    )
      .subscribe(updateHTML('display1'));

    this.subscription2 = enter2$.pipe(
      take(1),
      switchMap(endRange => {
        return timer(0, 100).pipe(
          mapTo(positiveOrNegative(this.randomNumber2, currentNumber)),
          startWith(currentNumber),
          scan((acc, curr) => acc + curr),
          takeWhile(takeUntilFunction(this.randomNumber2, currentNumber))
        )
      }),
      tap(v => (currentNumber = v)),
      startWith(currentNumber)
    ).subscribe(updateHTML('display2'));

  }

  generateRanking(min, max) {
    this.randomNumber1 =  Math.floor(Math.random() * (max - min + 1) + min);
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

    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }

    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }

}
