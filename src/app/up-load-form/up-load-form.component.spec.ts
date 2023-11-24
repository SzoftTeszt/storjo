import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLoadFormComponent } from './up-load-form.component';

describe('UpLoadFormComponent', () => {
  let component: UpLoadFormComponent;
  let fixture: ComponentFixture<UpLoadFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpLoadFormComponent]
    });
    fixture = TestBed.createComponent(UpLoadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
