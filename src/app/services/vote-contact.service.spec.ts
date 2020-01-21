import { TestBed } from '@angular/core/testing';

import { VoteContactService } from './vote-contact.service';

describe('VoteContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoteContactService = TestBed.get(VoteContactService);
    expect(service).toBeTruthy();
  });
});
