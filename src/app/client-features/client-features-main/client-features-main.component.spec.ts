import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeaturesMain } from './client-features-main.component';

describe('ClientFeaturesMain', () => {
  let component: ClientFeaturesMain;
  let fixture: ComponentFixture<ClientFeaturesMain>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFeaturesMain ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFeaturesMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
