import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { MatDialog } from '@angular/material';
import { ContactResponseModalComponent } from '../modals/contact-response-modal/contact-response-modal.component';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  contactForm: FormGroup;

  contactFormSubscription: Subscription;
  emailSubscription: Subscription;

  contact: any;

  constructor(
    private fb: FormBuilder,
    private cs: ContactService,
    public dialog: MatDialog,
    private es: EmailService
  ) { }

  ngOnInit() {
    this.contactForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    const ob = {
      firstName: this.contactForm.controls.firstName.value,
      lastName: this.contactForm.controls.lastName.value,
      email: this.contactForm.controls.email.value,
      message: this.contactForm.controls.message.value
    };
    console.log(ob);
    this.contactFormSubscription = this.cs.createContact(ob).subscribe(contact => {
      console.log(contact);
      if (contact) {
        this.contact = contact;
      }
    });
    // this.emailSubscription = this.es.sendContactFormEmail(ob).subscribe(data => {
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
        firstName: this.contactForm.controls.firstName.value
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
    this.contactForm.reset();
  }

  ngOnDestroy() {
    if (this.contactFormSubscription) {
      this.contactFormSubscription.unsubscribe();
    }
  }

}
