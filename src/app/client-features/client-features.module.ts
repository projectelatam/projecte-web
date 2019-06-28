import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFeaturesMain } from './client-features-main/client-features-main.component';
import { ClientFeaturesRoutingModule } from './client-features-routing.module'
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SilderComponent } from './silder/silder.component';
import { WidgetsModule } from '../widgets/widgets.module';
// import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// our selection of components: primeng, ngboostrap, material2, mdb-boostrap, and materialize (needs to be added)
// https://github.com/sherweb/ngx-materialize
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ClientFeaturesMain,
    TopBarComponent,
    SilderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientFeaturesRoutingModule,
    WidgetsModule,
    MDBBootstrapModule.forRoot()
    // NgbAlertModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [HomeComponent]
})
export class ClientFeaturesModule { }
