import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  contactForm: FormGroup;

  contactFromSubscription: Subscription;

  constructor(
    private fb: FormBuilder
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
    // this.contactformSubscription = this.cs.createContact(ob).subscribe(contact => {
    //   console.log(contact);
    //   if (contact) {
    //     this.contact = contact;
    //   }
    // });
    // this.emailSubscription = this.es.sendEmail(ob).subscribe(data => {
    //   console.log('email was sent');
    // }, err => {
    //   console.log('err');
    // });
    // this.responseModal();
    this.clearFunction();
  }

  private clearFunction(): void {
    this.formDirective.resetForm();
    this.contactForm.reset();
  }

}
