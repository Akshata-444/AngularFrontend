import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsubmissionComponent } from './getsubmission.component';

describe('GetsubmissionComponent', () => {
  let component: GetsubmissionComponent;
  let fixture: ComponentFixture<GetsubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetsubmissionComponent]
    });
    fixture = TestBed.createComponent(GetsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
