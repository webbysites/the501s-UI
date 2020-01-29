import { TestBed } from '@angular/core/testing';

import { RequestContactService } from './request-contact.service';

describe('RequestContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestContactService = TestBed.get(RequestContactService);
    expect(service).toBeTruthy();
  });
});
