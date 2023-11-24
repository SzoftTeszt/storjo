import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLoadListComponent } from './up-load-list.component';

describe('UpLoadListComponent', () => {
  let component: UpLoadListComponent;
  let fixture: ComponentFixture<UpLoadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpLoadListComponent]
    });
    fixture = TestBed.createComponent(UpLoadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
