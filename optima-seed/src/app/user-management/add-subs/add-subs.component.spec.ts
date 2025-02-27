import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSubsComponent } from './add-subs.component';

describe('AddSubsComponent', () => {
  let component: AddSubsComponent;
  let fixture: ComponentFixture<AddSubsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
