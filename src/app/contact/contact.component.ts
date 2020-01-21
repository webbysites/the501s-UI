import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { MatDialog } from '@angular/material';
import { ContactResponseModalComponent } from '../modals/contact-response-modal/contact-response-modal.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  contactForm: FormGroup;

  contactFormSubscription: Subscription;

  contact: any;

  constructor(
    private fb: FormBuilder,
    private cs: ContactService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.contactForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      requests: ['', Validators.required]
    });
  }

  onSubmit() {
    const ob = {
      'firstName': this.contactForm.controls.firstName.value,
      'lastName': this.contactForm.controls.lastName.value,
      'email': this.contactForm.controls.email.value,
      'requests': this.contactForm.controls.requests.value
    };
    console.log(ob);
    this.contactFormSubscription = this.cs.createContact(ob).subscribe(contact => {
      console.log(contact);
      if (contact) {
        this.contact = contact;
      }
    });
    // this.emailSubscription = this.es.sendEmail(ob).subscribe(data => {
    //   console.log('email was sent');
    // }, err => {
    //   console.log('err');
    // });
    this.responseModal();
    this.clearFunction();
  }

  responseModal() {
    const dialogRef = this.dialog.open(ContactResponseModalComponent, {
      panelClass: 'custom-dialog-container',
      data: {

      },
      disableClose: true,
      width: '600px',
      height: '520px'
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }

  private clearFunction(): void {
    this.formDirective.resetForm();
    this.contactForm.reset();
  }

  ngOnDestroy() {
    if (this.contactFormSubscription) {
      this.contactFormSubscription.unsubscribe();
    }
  }

}
