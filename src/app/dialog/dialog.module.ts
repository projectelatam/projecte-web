import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SvgModule } from '../svg/svg.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { WizardDialogComponent } from './wizard-dialog/wizard-dialog.component';
import { AccomodationDialogComponent } from './accomodation-dialog/accomodation-dialog.component';

@NgModule({
  declarations: [
    LoginDialogComponent,
    RegisterDialogComponent,
    WizardDialogComponent,
    AccomodationDialogComponent,
  ],
  imports: [
    CommonModule,
    WidgetsModule,   
    MDBBootstrapModule,
    SvgModule,
    NgbModule,
    MaterialModule,
  ],
  exports: [
    LoginDialogComponent,
    RegisterDialogComponent,
    WizardDialogComponent,
    AccomodationDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    WizardDialogComponent,
    AccomodationDialogComponent
  ]
})
export class DialogModule { }
