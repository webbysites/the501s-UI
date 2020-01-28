import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-voting-response-modal',
  templateUrl: './voting-response-modal.component.html',
  styleUrls: ['./voting-response-modal.component.css']
})
export class VotingResponseModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

}
