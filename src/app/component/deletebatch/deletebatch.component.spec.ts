import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteBatchComponent } from './deletebatch.component';

describe('DeletebatchComponent', () => {
  let component: DeleteBatchComponent;
  let fixture: ComponentFixture<DeleteBatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBatchComponent]
    });
    fixture = TestBed.createComponent(DeleteBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
