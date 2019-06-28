import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrontMainComponent } from './main-front-main.component';

describe('MainFrontMainComponent', () => {
  let component: MainFrontMainComponent;
  let fixture: ComponentFixture<MainFrontMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFrontMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFrontMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
