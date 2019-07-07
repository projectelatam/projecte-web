import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from './widgets/widgets.module';
import { SvgModule } from './svg/svg.module';
import {MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { TestComponent } from './test/test.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { GtagModule } from 'angular-gtag';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    HttpClientModule,
    MatInputModule,
    WidgetsModule,
    SvgModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // GtagModule.forRoot({ trackingId: 'GTM-MGB2KZ3', trackPageviews: true, debug: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
