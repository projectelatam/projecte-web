import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialog/login-dialog/login-dialog.component';
import { AuthenticationService } from 'src/app/shared';
import { HelperServiceService } from 'src/app/shared/helper-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  animal: any;
  constructor(
    public authService: AuthenticationService,
    public hm: HelperServiceService
  ) {
    // this.authService.get(environment.apiUrl+'/rerservations').subscribe(d => {
    //   console.log('auth', d)
    // });
  }

  ngOnInit() {


  }

  openDialog(): void { // move the button tu its own component
    this.hm.OpenLoginDialog();
  }

  logOut() {
    this.authService.logout()
  }

}
