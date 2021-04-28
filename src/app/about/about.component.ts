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
    // this.getMemberInfo();
    // console.log(this.bandMembers);
    // this.addLineWidth();
  }

  ngAfterViewInit() {
    // this.scrollAnimation();
  }

  // addLineWidth() {
  //   let line1 = this.el.nativeElement.querySelector('.line1');
  //   // console.log(line1);
  //   this.bandMembers.forEach(member => {
  //     console.log(member.singing);

  //     this.renderer.setStyle(line1, 'max-width', member.singing + '%');
  //   });
  // }

  flip() {
    // this.flipped = !this.flipped;
    $('.flip-card').toggleClass('flipped');

  }

  flip1() {
    // this.flipped = !this.flipped;
    $('.flip-card1').toggleClass('flipped');
    $('#a1').toggleClass('aaron-line1');
    $('#a2').toggleClass('aaron-line2');
    $('#a3').toggleClass('aaron-line3');
    $('#a4').toggleClass('aaron-line4');
    $('#a5').toggleClass('aaron-line5');
    $('#a6').toggleClass('aaron-line6');
  }

  flip2() {
    $('.flip-card2').toggleClass('flipped');
    $('#d1').toggleClass('derek-line1');
    $('#d2').toggleClass('derek-line2');
    $('#d3').toggleClass('derek-line3');
    $('#d4').toggleClass('derek-line4');
    $('#d5').toggleClass('derek-line5');
    $('#d6').toggleClass('derek-line6');
  }

  flip3() {
    $('.flip-card3').toggleClass('flipped');
    $('#t1').toggleClass('travis-line1');
    $('#t2').toggleClass('travis-line2');
    $('#t3').toggleClass('travis-line3');
    $('#t4').toggleClass('travis-line4');
    $('#t5').toggleClass('travis-line5');
    $('#t6').toggleClass('travis-line6');
  }

  flip4() {
    $('.flip-card4').toggleClass('flipped');
    $('#jl1').toggleClass('johnny-line1');
    $('#jl2').toggleClass('johnny-line2');
    $('#jl3').toggleClass('johnny-line3');
    $('#jl4').toggleClass('johnny-line4');
    $('#jl5').toggleClass('johnny-line5');
    $('#jl6').toggleClass('johnny-line6');
  }

  flip5() {
    $('.flip-card5').toggleClass('flipped');
    $('#jr1').toggleClass('jaime-line1');
    $('#jr2').toggleClass('jaime-line2');
    $('#jr3').toggleClass('jaime-line3');
    $('#jr4').toggleClass('jaime-line4');
    $('#jr5').toggleClass('jaime-line5');
    $('#jr6').toggleClass('jaime-line6');
  }

  // getMemberInfo() {
  //   this.bms.getBandMembers().subscribe(members => {
  //     members.forEach(member => {
  //       this.bandMembers.push(member);
  //     });
  //   });
  // }

  // scrollAnimation() {
  //   const a1 = this.el.nativeElement.querySelector('#a1');
  //   const a1Position = a1.offsetTop;
  //   $(window).scroll(() => {
  //     const positionTop = $(window).scrollTop();
  //     if (a1Position <= positionTop + 700) {
  //       console.log('success');
  //       this.renderer.addClass(a1, 'aaron-line1');

  //     }
  //   });
  // }

}
