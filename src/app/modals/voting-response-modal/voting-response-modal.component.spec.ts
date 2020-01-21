import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingResponseModalComponent } from './voting-response-modal.component';

describe('VotingResponseModalComponent', () => {
  let component: VotingResponseModalComponent;
  let fixture: ComponentFixture<VotingResponseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingResponseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
