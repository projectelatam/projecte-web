import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingWidgetComponent } from './booking-widget/booking-widget.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactWidgetComponent } from './contact-widget/contact-widget.component';
import { NewsletterWidgetComponent } from './newsletter-widget/newsletter-widget.component';

@NgModule({
  declarations: [BookingWidgetComponent, ContactWidgetComponent, NewsletterWidgetComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [BookingWidgetComponent, ContactWidgetComponent, NewsletterWidgetComponent]
})
export class WidgetsModule { }
