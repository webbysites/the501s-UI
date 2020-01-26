import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  flipped: boolean = false;
  $: any;
  constructor() { }

  ngOnInit() {
  }

  flip1() {
    // this.flipped = !this.flipped;
    $('.flip-card1').toggleClass('flipped');

  }

  flip2() {
    $('.flip-card2').toggleClass('flipped');
  }

  flip3() {
    $('.flip-card3').toggleClass('flipped');
  }

  flip4() {
    $('.flip-card4').toggleClass('flipped');
  }

  flip5() {
    $('.flip-card5').toggleClass('flipped');
  }

}
