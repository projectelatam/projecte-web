import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public places = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  constructor(public route: ActivatedRoute) { 
    console.log(this.route.snapshot.queryParams)
  }

  ngOnInit() {

    // if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.p) {
    //   this.page = +this.route.snapshot.queryParams.p;
    // }


  // private setRouterParams(): void {
  //   this.router.navigate([], { relativeTo: this.route, queryParams: { p: this.page }, replaceUrl: this.replace });
  //   this.replace = false;
  // }
  }

}
