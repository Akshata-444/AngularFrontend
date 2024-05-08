import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdailyupdateComponent } from './getdailyupdate.component';

describe('GetdailyupdateComponent', () => {
  let component: GetdailyupdateComponent;
  let fixture: ComponentFixture<GetdailyupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetdailyupdateComponent]
    });
    fixture = TestBed.createComponent(GetdailyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
