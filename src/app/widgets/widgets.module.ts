import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingWidgetComponent } from './booking-widget/booking-widget.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactWidgetComponent } from './contact-widget/contact-widget.component';
import { NewsletterWidgetComponent } from './newsletter-widget/newsletter-widget.component';
import { SvgModule } from '../svg/svg.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import {OverlayModule} from '@angular/cdk/overlay';

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
    MaterialModule,
    OverlayModule
    ],
  exports: [
    BookingWidgetComponent, 
    ContactWidgetComponent, 
    NewsletterWidgetComponent
  ], 
  providers: []
})
export class WidgetsModule { }
