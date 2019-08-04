import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PanelMainComponent,
  //   canActivate: [AuthorizationGuard],
  //   children: [
  //     {
  //       path: 'user',
  //       component: UserComponent,
  //       data: {
  //         title: 'Ajustes de usuario',
  //         meta: [
  //           {
  //             name: 'description',
  //             content:
  //               'Llena tu perfil de crédito y conoce para cuales tarjetas de crédito y préstamos estás o no pre-calificado.'
  //           }
  //         ]
  //       }
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
