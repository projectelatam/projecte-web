import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer, FullscreenOverlayContainer, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Router, NavigationEnd, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
// import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-booking-widget',
  templateUrl: './booking-widget.component.html',
  styleUrls: ['./booking-widget.component.scss'],
  providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }],
  //encapsulation: ViewEncapsulation.None // temporal
})
export class BookingWidgetComponent implements OnInit {
  // stateCtrl = new MatFormFieldControl();
  public packageType: string = 'all';
  public checkin: string = '';
  public checkout: string = '';
  public stay: string = 'all';
  public nights;
  public showWidget = false;
  public houseStay = [
    // { value: '', disabled: false },
    { value: 'all', viewValue: 'All' },
    { value: 'Penthouse', viewValue: 'Penthouse' },
    { value: 'Villa', viewValue: 'Villa' },
    { value: 'Bungalo', viewValue: 'Bungalo' },
  ];


  public Snights = [
    // { value: '', disabled: false },
    { value: 'all', viewValue: 'Show me All' },
    { value: '3', viewValue: '3 Nights 2 Days' },
    { value: '7', viewValue: '7 nights 6 Days (1 Week)' },
  ];

  public packageTypes = [
    { value: 'all', viewValue: 'Show me All' },
    { value: 'standard', viewValue: 'Standard' },
    { value: 'plus', viewValue: 'Plus' },
    { value: 'premiumplus', viewValue: 'Premium +' },
  ];


  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });

    const tree: UrlTree = router.parseUrl(router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g && g.segments? g.segments: [];
    this.showWidget = s &&  s[0] && s[0].path == 'booking' ? true : false; // returns 'team'
    // console.log(s[0].path);
   // s[0].path; // returns 'team'
   // s[0].parameters; // returns {id: 33}
  }

  ngOnInit() {
    // const overlayRef = Overlay.create();
    // const userProfilePortal = new ComponentPortal(UserProfile);
    // overlayRef.attach(userProfilePortal);
  }

  public dateValidation(date) {
    console.log(date);
  }

}
