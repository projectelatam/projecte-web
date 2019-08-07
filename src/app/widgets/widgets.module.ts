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
import { AmdcModule } from '../amdc/amdc.module';
import { RouterModule } from '@angular/router';
import { LoginWidgetComponent } from './login-widget/login-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardWidgetComponent } from './wizard-widget/wizard-widget.component';
import { BookCardPackageComponent } from './book-card-package/book-card-package.component';
import { AccomodationDetailWidgetComponent } from './accomodation-detail-widget/accomodation-detail-widget.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    BookingWidgetComponent, 
    ContactWidgetComponent, 
    NewsletterWidgetComponent,
    LoginWidgetComponent,
    WizardWidgetComponent,
    BookCardPackageComponent,
    AccomodationDetailWidgetComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    NgxGalleryModule,
    SvgModule,
    NgbModule,
    MaterialModule,
    OverlayModule,
    AmdcModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports: [
    BookingWidgetComponent, 
    ContactWidgetComponent, 
    NewsletterWidgetComponent, 
    LoginWidgetComponent,
    WizardWidgetComponent,
    BookCardPackageComponent,
    AccomodationDetailWidgetComponent
  ], 
  providers: [],
})
export class WidgetsModule { }
