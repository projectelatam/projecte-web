import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationDialogComponent } from './accomodation-dialog.component';

describe('AccomodationDialogComponent', () => {
  let component: AccomodationDialogComponent;
  let fixture: ComponentFixture<AccomodationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
