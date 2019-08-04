import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFeaturesMain } from './client-features-main/client-features-main.component';
import { ClientFeaturesRoutingModule } from './client-features-routing.module'
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SilderComponent } from './silder/silder.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { SvgModule } from '../svg/svg.module';
// import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// our selection of components: primeng, ngboostrap, material2, mdb-boostrap, and materialize (needs to be added)
// https://github.com/sherweb/ngx-materialize
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import { MaterialModule } from '../material/material.module';
import { PackagesComponent } from './packages/packages.component';
import { AmdcModule } from '../amdc/amdc.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ModelsComponent } from './pages/models/models.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { SingleModelComponent } from './pages/models/single-model/single-model.component';
import { LoginWidgetComponent } from '../widgets/login-widget/login-widget.component';
import { PanelModule } from '../panel/panel.module';
// /ngx-gallery
@NgModule({
  declarations: [
    ClientFeaturesMain,
    TopBarComponent,
    SilderComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    ContactUsComponent,
    GalleryComponent,
    BookingComponent,
    ModelsComponent,
    SingleModelComponent
  ],
  imports: [
    CommonModule,
    ClientFeaturesRoutingModule,
    WidgetsModule,
    MDBBootstrapModule.forRoot(),
    SvgModule,
    AngularStickyThingsModule,
    MaterialModule,
    AmdcModule,
    NgxGalleryModule,
    PanelModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    HomeComponent,
    ContactUsComponent, 
    GalleryComponent, 
    BookingComponent, 
    ModelsComponent, 
    SingleModelComponent
  ]
})
export class ClientFeaturesModule { }
