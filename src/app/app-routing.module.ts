import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFrontModule } from './main-front/main-front.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: './main-front/main-front.module#MainFrontModule'
  }
  // {
  //   path: '',
  //   loadChildren: './client-features/client-features.module#ClientFeaturesModule'
  // },
  // {
  //   path: 'panel-de-control',
  //   loadChildren: './panel/panel.module#PanelModule',
  //   canLoad: [AuthorizationGuard]
  // },
  // {
  //   path: 'common',
  //   loadChildren: './shared-module/shared.module#SharedModule'
  // },
  // {
  //   path: rootRouteFe,
  //   loadChildren: './finantial-entities/finantial-entities.module#FinantialEntitiesModule'
  // },
  // {
  //   path: 'no-encontrado',
  //   loadChildren: './not-found/not-found.module#NotFoundModule'
  // },
  // { path: '**', redirectTo: '/no-encontrado', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
