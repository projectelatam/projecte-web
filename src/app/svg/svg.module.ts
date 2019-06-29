import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneSvgComponent } from './phone-svg/phone-svg.component';

@NgModule({
  declarations: [PhoneSvgComponent],
  imports: [
    CommonModule
  ],
  exports: [PhoneSvgComponent]
})
export class SvgModule { }
