import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserdetailComponent } from './getuserdetail.component';

describe('GetuserdetailComponent', () => {
  let component: GetuserdetailComponent;
  let fixture: ComponentFixture<GetuserdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetuserdetailComponent]
    });
    fixture = TestBed.createComponent(GetuserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
