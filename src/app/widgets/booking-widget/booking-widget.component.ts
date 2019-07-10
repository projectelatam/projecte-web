import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer, FullscreenOverlayContainer, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-booking-widget',
  templateUrl: './booking-widget.component.html',
  styleUrls: ['./booking-widget.component.scss'],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  //encapsulation: ViewEncapsulation.None // temporal
})
export class BookingWidgetComponent implements OnInit {
  // stateCtrl = new MatFormFieldControl();

  public houseStay = [
    // { value: '', disabled: false },
    { value: 'villa', viewValue: 'Villa' },
    { value: 'Suite', viewValue: 'Suite' },
  ];
  
  constructor() { }

  ngOnInit() {
    // const overlayRef = Overlay.create();
    // const userProfilePortal = new ComponentPortal(UserProfile);
    // overlayRef.attach(userProfilePortal);
  }

}
