import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projecte';
  constructor(private http: HttpClient, 
    // public gtag: Gtag
    ){
    console.log(http)
  }
  public ngOnInit(): void{
    // this.gtag.pageview();
    // this.gtag.event('view_promotion')
  }
}
