import { Component, OnInit } from '@angular/core';
import { RequestResponseModalComponent } from '../modals/request-response-modal/request-response-modal.component';
import { MatDialog } from '@angular/material';
import { RequestModalComponent } from '../modals/request-modal/request-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

  }


  openRequestModal() {
    const dialogRef = this.dialog.open(RequestModalComponent, {
      panelClass: 'request-modal-container',
      data: {
        // name:
      },
      disableClose: true,
      width: '600px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }

}
