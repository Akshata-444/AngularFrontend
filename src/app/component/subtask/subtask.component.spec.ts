import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskComponent } from './subtask.component';

describe('SubtaskComponent', () => {
  let component: SubtaskComponent;
  let fixture: ComponentFixture<SubtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtaskComponent]
    });
    fixture = TestBed.createComponent(SubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
