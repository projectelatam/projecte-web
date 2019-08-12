import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageWidgetComponent } from './package-widget.component';

describe('PackageWidgetComponent', () => {
  let component: PackageWidgetComponent;
  let fixture: ComponentFixture<PackageWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
