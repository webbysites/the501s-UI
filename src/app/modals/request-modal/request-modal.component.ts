import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequestContactService } from 'src/app/services/request-contact.service';
import { RequestResponseModalComponent } from '../request-response-modal/request-response-modal.component';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.css']
})
export class RequestModalComponent implements OnInit, OnDestroy {
  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;

  requestForm: FormGroup;
  requestFormSubscription: Subscription;
  requetsContact: any;
  emailSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private rcs: RequestContactService,
    private es: EmailService,
    private dialogRef: MatDialogRef<RequestModalComponent>
  ) { }

  ngOnInit() {
    this.requestForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      request: ['', Validators.required]
    });
  }

  onSubmit() {
    const ob = {
      name: this.requestForm.controls.name.value,
      email: this.requestForm.controls.email.value,
      request: this.requestForm.controls.request.value
    };
    this.requestFormSubscription = this.rcs.createRequestContact(ob).subscribe(contact => {
      if (contact) {
        this.requetsContact = contact;
      }
      console.log(ob);
    });
    this.emailSubscription = this.es.sendRequestFormEmail(ob).subscribe(data => {
      console.log('email was sent');
    }, err => {
      console.log('err');
    });
    this.dialogRef.close();
    this.responseModal();
    this.clearFunction();
  }

  responseModal() {
    const dialogRef = this.dialog.open(RequestResponseModalComponent, {
      panelClass: 'request-modal-container',
      data: {
        name: this.requestForm.controls.name.value
      },
      disableClose: true,
      width: '400px',
      height: '250px'
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }

  private clearFunction(): void {
    this.formDirective.resetForm();
    this.requestForm.reset();
  }

  ngOnDestroy() {
    if (this.requestFormSubscription) {
      this.requestFormSubscription.unsubscribe();
    }
  }

}
