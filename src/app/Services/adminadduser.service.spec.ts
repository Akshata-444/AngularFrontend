import { TestBed } from '@angular/core/testing';

import { AdminadduserService } from './adminadduser.service';

describe('AdminadduserService', () => {
  let service: AdminadduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminadduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
