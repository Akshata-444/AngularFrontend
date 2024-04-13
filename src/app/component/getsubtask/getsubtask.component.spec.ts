import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsubtaskComponent } from './getsubtask.component';

describe('GetsubtaskComponent', () => {
  let component: GetsubtaskComponent;
  let fixture: ComponentFixture<GetsubtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetsubtaskComponent]
    });
    fixture = TestBed.createComponent(GetsubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
