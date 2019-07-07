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

  foods = [
    { value: '', disabled: false },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos is disabled', disabled: true },
    { value: 'fruit-3', viewValue: 'Fruit' },
  ];
  
  constructor() { }

  ngOnInit() {
    // const overlayRef = Overlay.create();
    // const userProfilePortal = new ComponentPortal(UserProfile);
    // overlayRef.attach(userProfilePortal);
  }

}
