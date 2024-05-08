import { TestBed } from '@angular/core/testing';

import { DailyupdateService } from './dailyupdate.service';

describe('DailyupdateService', () => {
  let service: DailyupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
