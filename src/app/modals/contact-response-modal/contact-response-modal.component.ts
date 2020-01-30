import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact-response-modal',
  templateUrl: './contact-response-modal.component.html',
  styleUrls: ['./contact-response-modal.component.css']
})
export class ContactResponseModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
