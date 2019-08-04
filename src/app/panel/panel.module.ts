import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { UserComponent } from './user/user.component';
import { TopBarComponent } from '../client-features/top-bar/top-bar.component';
import { SilderComponent } from '../client-features/silder/silder.component';
import { FooterComponent } from '../client-features/footer/footer.component';


@NgModule({
  declarations: [PanelMainComponent, UserComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    // TopBarComponent,
    // SilderComponent,
    // FooterComponent,
  ],
  exports: [
    PanelMainComponent,
    UserComponent
  ]
})
export class PanelModule { }
