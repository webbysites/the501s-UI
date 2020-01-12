import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', animate('1000ms 4000ms'))
    ])
  ]
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  buttonFade = false;

  currentState = 'initial';

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'finla' : 'initial';
  }

  ngAfterViewInit() {

  }

}
