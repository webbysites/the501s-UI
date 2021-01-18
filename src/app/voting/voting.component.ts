import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VoteContactService } from '../services/vote-contact.service';
import { MatDialog } from '@angular/material';
import { VotingResponseModalComponent } from '../modals/voting-response-modal/voting-response-modal.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


import { FakeBands } from '../../../src/fakeBands';
import { FakeBand } from '../models/fakeBand';
import { EmailService } from '../services/email.service';

const bandsAnimation = trigger('bandsAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('-600ms', animate('400ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
]);


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
  animations: [
    trigger('bandsAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }), stagger('-600ms', animate('400ms ease-out', style({ opacity: 1 })))],
          { optional: true }
        ),
        query(':leave',
          animate('200ms', style({ opacity: 0 })),
          { optional: true }
        )
      ])
    ])
  ]
})
export class VotingComponent implements OnInit, OnDestroy {
  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;

  voteContactForm: FormGroup;
  voteContact: any;
  voteContactFormSubscription: Subscription;
  emailSubscription: Subscription;

  bands: FakeBand[] = FakeBands;

  constructor(
    private fb: FormBuilder,
    private vcs: VoteContactService,
    private dialog: MatDialog,
    private es: EmailService
  ) { }

  ngOnInit() {
    this.voteContactForm = this.createForm();
    this.shuffleBands(this.bands);
  }

  createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    const ob = {
      name: this.voteContactForm.controls.name.value,
      email: this.voteContactForm.controls.email.value,
      comment: this.voteContactForm.controls.comment.value
    };
    console.log(ob);
    this.voteContactFormSubscription = this.vcs.createVoteContact(ob).subscribe(contact => {
      if (contact) {
        this.voteContact = contact;
      }
    });
    // this.emailSubscription = this.es.sendVotingFormEmail(ob).subscribe(data => {
    //   console.log('email was sent');
    // }, err => {
    //   console.log('err');
    // });
    this.responseModal();
    this.clearFunction();

  }

  responseModal() {
    const dialogRef = this.dialog.open(VotingResponseModalComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        name: this.voteContactForm.controls.name.value
      },
      disableClose: true,
      width: '400px',
      height: '300px'
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  clearFunction(): void {
    this.formDirective.resetForm();
    this.voteContactForm.reset();
  }

  shuffleBands(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  ngOnDestroy() {
    if (this.voteContactFormSubscription) {
      this.voteContactFormSubscription.unsubscribe();
    }
  }

}
