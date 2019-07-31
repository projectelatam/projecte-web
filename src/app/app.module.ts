import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from './widgets/widgets.module';
import { SvgModule } from './svg/svg.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestComponent } from './test/test.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AmdcModule } from './amdc/amdc.module';
import { ServicesModule } from './services/services.module';
import { DialogModule } from './dialog/dialog.module';
// import { GtagModule } from 'angular-gtag';
import { AuthenticationModule } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    // NoopAnimationsModule,
    HttpClientModule,
    WidgetsModule,
    SvgModule,
    
    //delete soon
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // end delete soon
    
    AmdcModule,
    ServicesModule,
    DialogModule,
    // GtagModule.forRoot({ trackingId: 'GTM-MGB2KZ3', trackPageviews: true, debug: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
