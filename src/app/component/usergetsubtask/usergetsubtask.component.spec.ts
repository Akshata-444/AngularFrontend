import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergetsubtaskComponent } from './usergetsubtask.component';

describe('UsergetsubtaskComponent', () => {
  let component: UsergetsubtaskComponent;
  let fixture: ComponentFixture<UsergetsubtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsergetsubtaskComponent]
    });
    fixture = TestBed.createComponent(UsergetsubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
