import { TestBed } from '@angular/core/testing';

import { GetuserdetailService } from './getuserdetail.service';

describe('GetuserdetailService', () => {
  let service: GetuserdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
