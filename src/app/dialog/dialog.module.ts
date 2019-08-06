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

@NgModule({
  declarations: [
    LoginDialogComponent,
    RegisterDialogComponent,
    WizardDialogComponent,
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
    WizardDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    WizardDialogComponent
  ]
})
export class DialogModule { }
