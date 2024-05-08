import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddailyupdateComponent } from './adddailyupdate.component';

describe('AdddailyupdateComponent', () => {
  let component: AdddailyupdateComponent;
  let fixture: ComponentFixture<AdddailyupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddailyupdateComponent]
    });
    fixture = TestBed.createComponent(AdddailyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
