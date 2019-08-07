import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationDetailWidgetComponent } from './accomodation-detail-widget.component';

describe('AccomodationDetailWidgetComponent', () => {
  let component: AccomodationDetailWidgetComponent;
  let fixture: ComponentFixture<AccomodationDetailWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationDetailWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationDetailWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
