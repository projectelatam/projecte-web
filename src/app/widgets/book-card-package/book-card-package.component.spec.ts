import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardPackageComponent } from './book-card-package.component';

describe('BookCardPackageComponent', () => {
  let component: BookCardPackageComponent;
  let fixture: ComponentFixture<BookCardPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
