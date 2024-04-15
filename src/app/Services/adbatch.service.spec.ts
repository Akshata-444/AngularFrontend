import { TestBed } from '@angular/core/testing';

import { AdbatchService } from './adbatch.service';

describe('AdbatchService', () => {
  let service: AdbatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdbatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
