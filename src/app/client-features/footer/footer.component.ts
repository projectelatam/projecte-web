import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialog/login-dialog/login-dialog.component';
import { AuthenticationService } from 'src/app/shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  animal: any;
  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService
    ) {
      this.authService.get('http://localhost:1337/rerservations').subscribe(d => {
        console.log('auth', d)
      });
   }

  ngOnInit() {


  }

  openDialog(): void { // move the button tu its own component
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {name: 'sds', animal: 'dsds'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
