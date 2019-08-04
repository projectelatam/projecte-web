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
    public authService: AuthenticationService,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    //this.login(); //delete this line
  }

  ngOnInit() { }

  public login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password).subscribe(s => {
        console.log("User is logged in");
        console.log('afterlogin data', s);
        // this.router.navigateByUrl('/');
        location.reload(true);
        // this.router.navigateByUrl(this.authService.getInterruptedUrl())
      });
    }
  }
}
