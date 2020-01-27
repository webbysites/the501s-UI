import { Component, OnInit, HostListener, ElementRef, Renderer2, Renderer, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { BandMemberService } from '../services/band-member.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  flipped: boolean = false;
  $: any;
  line1 = this.el.nativeElement.querySelector('.line1');
  bandMembers: any[] = [];

  constructor(
    private bms: BandMemberService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.getMemberInfo();
    console.log(this.bandMembers);
    this.addLineWidth();
  }

  ngAfterViewInit() {

  }

  addLineWidth() {
    let line1 = this.el.nativeElement.querySelector('.line1:after');
    console.log(line1);
    this.bandMembers.forEach(member => {
      console.log(member.singing);

      this.renderer.setStyle(line1, 'max-width', member.singing + '%');
    });
  }

  flip() {
    // this.flipped = !this.flipped;
    $('.flip-card').toggleClass('flipped');

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

  getMemberInfo() {
    this.bms.getBandMembers().subscribe(members => {
      members.forEach(member => {
        this.bandMembers.push(member);
      });
    });
  }

}
