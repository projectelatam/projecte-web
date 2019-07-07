import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer, FullscreenOverlayContainer, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-booking-widget',
  templateUrl: './booking-widget.component.html',
  styleUrls: ['./booking-widget.component.scss'],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}]
})
export class BookingWidgetComponent implements OnInit {
  // stateCtrl = new MatFormFieldControl();
  toppings = new FormControl(); // rename toopins to house time

  toppingList: string[] = ['Villa', 'Suite'];
  constructor() { }

  ngOnInit() {
    // const overlayRef = Overlay.create();
    // const userProfilePortal = new ComponentPortal(UserProfile);
    // overlayRef.attach(userProfilePortal);
  }

}
