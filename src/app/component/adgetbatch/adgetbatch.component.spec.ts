import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdgetbatchComponent } from './adgetbatch.component';

describe('AdgetbatchComponent', () => {
  let component: AdgetbatchComponent;
  let fixture: ComponentFixture<AdgetbatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdgetbatchComponent]
    });
    fixture = TestBed.createComponent(AdgetbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
