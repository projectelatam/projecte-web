import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public navItems = [
    ['Home', '/'],
    ['Booking', '/booking'],
    ['Packages', '/packages'],
    ['Contact', '/contact'],
    ['Gallery', '/gallery']
  ]
  public activeUrl;
  constructor(public route: ActivatedRoute, public router: Router) {
    this.activeUrl = this.router.url
    console.log(this.activeUrl);
   }

  ngOnInit() {
    // console.log(this.router.url)
    // this.route.data.snapshot(r => {
    //   console.log('sd',r);
    // });
  }

}
