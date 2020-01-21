import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactResponseModalComponent } from './contact-response-modal.component';

describe('ContactResponseModalComponent', () => {
  let component: ContactResponseModalComponent;
  let fixture: ComponentFixture<ContactResponseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactResponseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
