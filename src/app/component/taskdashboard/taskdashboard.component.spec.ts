import { ComponentFixture, TestBed } from '@angular/core/testing';
import { taskdashboardComponent } from './taskdashboard.component';

describe('TaskdashboardComponent', () => {
  let component: taskdashboardComponent;
  let fixture: ComponentFixture<taskdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [taskdashboardComponent]
    });
    fixture = TestBed.createComponent(taskdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
