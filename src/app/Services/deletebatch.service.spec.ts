import { TestBed } from '@angular/core/testing';

import { DeletebatchService } from './deletebatch.service';

describe('DeletebatchService', () => {
  let service: DeletebatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletebatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
