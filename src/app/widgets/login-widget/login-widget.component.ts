import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/shared';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.scss']
})
export class LoginWidgetComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.login();
  }

  ngOnInit() { }

  public login() {
    // const val = this.form.value;

    // if (val.email && val.password) {
    //     this.authService.login(val.email, val.password)
    //         .subscribe(
    //             () => {
    //                 console.log("User is logged in");
    //                 this.router.navigateByUrl('/');
    //             }
    //         );
    // }
    this.authService.login().subscribe((s) => {
      console.log('afterlogin data', s);
      // this.router.navigateByUrl(this.authService.getInterruptedUrl())
    });
  }
}
