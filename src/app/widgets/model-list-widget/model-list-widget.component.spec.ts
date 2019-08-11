import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelListWidgetComponent } from './model-list-widget.component';

describe('ModelListWidgetComponent', () => {
  let component: ModelListWidgetComponent;
  let fixture: ComponentFixture<ModelListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
