import { TestBed } from '@angular/core/testing';

import { AddBatchService } from './add-batch.service';

describe('AddBatchService', () => {
  let service: AddBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
