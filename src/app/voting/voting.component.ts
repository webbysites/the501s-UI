import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';
import { VoteContactService } from '../services/vote-contact.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit, OnDestroy {
  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;

  voteContactForm: FormGroup;

  voteContact: any;

  voteContactFormSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private vcs: VoteContactService
  )
  { }

  ngOnInit() {
    this.voteContactForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    const ob = {
      firstName: this.voteContactForm.controls.firstName.value,
      lastName: this.voteContactForm.controls.lastName.value,
      email: this.voteContactForm.controls.email.value,
      comment: this.voteContactForm.controls.comment.value
    };
    console.log(ob);
    this.voteContactFormSubscription = this.vcs.createVoteContact(ob).subscribe(contact => {
      if (contact) {
        this.voteContact = contact;
      }
    });
    this.clearFunction();

  }

  clearFunction(): void {
    this.formDirective.resetForm();
    this.voteContactForm.reset();
  }
  ngOnDestroy() {
    if (this.voteContactFormSubscription) {
      this.voteContactFormSubscription.unsubscribe();
    }
  }

}
