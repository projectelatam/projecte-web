import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.scss']
})
export class LoginWidgetComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.login();
  }

  ngOnInit() { }

  public login() {
    this.authService.login().subscribe(() => {
      // this.router.navigateByUrl(this.authService.getInterruptedUrl())
    });
  }
}
