import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingWidgetComponent } from './booking-widget/booking-widget.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactWidgetComponent } from './contact-widget/contact-widget.component';
import { NewsletterWidgetComponent } from './newsletter-widget/newsletter-widget.component';
import { SvgModule } from '../svg/svg.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    BookingWidgetComponent, 
    ContactWidgetComponent, 
    NewsletterWidgetComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    SvgModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
    ],
  exports: [
    BookingWidgetComponent, 
    ContactWidgetComponent, 
    NewsletterWidgetComponent
  ]
})
export class WidgetsModule { }
