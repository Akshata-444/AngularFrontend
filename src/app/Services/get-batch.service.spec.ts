import { TestBed } from '@angular/core/testing';

import { GetBatchService } from './get-batch.service';

describe('GetBatchService', () => {
  let service: GetBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
