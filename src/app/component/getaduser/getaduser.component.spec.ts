import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaduserComponent } from './getaduser.component';

describe('GetaduserComponent', () => {
  let component: GetaduserComponent;
  let fixture: ComponentFixture<GetaduserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetaduserComponent]
    });
    fixture = TestBed.createComponent(GetaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
