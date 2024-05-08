import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmentordetailsComponent } from './getmentordetails.component';

describe('GetmentordetailsComponent', () => {
  let component: GetmentordetailsComponent;
  let fixture: ComponentFixture<GetmentordetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetmentordetailsComponent]
    });
    fixture = TestBed.createComponent(GetmentordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
