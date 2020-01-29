import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-request-response-modal',
  templateUrl: './request-response-modal.component.html',
  styleUrls: ['./request-response-modal.component.css']
})
export class RequestResponseModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
