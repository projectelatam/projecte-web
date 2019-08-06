import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { WizardDialogComponent } from '../dialog/wizard-dialog/wizard-dialog.component';
import { LoginDialogComponent } from '../dialog/login-dialog/login-dialog.component';
@Injectable({
  providedIn: 'root',
})
export class HelperServiceService {


  public isAuthorized = false

  constructor(
    public auth: AuthenticationService,
    public dialog: MatDialog
  ) {
    this.isAuthorizedd();
  }

  // refactor with a switch
  public OpenWizardDialog() { 
    const dialogRef = this.dialog.open(WizardDialogComponent, {
      width: '90%',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public OpenLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public OpenWizardExample() { // delete refactor seee as reference om how to transfer data
    // const dialogRef = this.dialog.open(WizardDialogComponent, {
    //   width: '250px',
    //   data: { name: 'sds', animal: 'dsds' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }


  private isAuthorizedd() {
    this.auth.isAuthorized().subscribe(a => {
      this.isAuthorized = a;
    });
  }
}
