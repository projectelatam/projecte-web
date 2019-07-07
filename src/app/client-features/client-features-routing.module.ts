import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFeaturesMain } from './client-features-main/client-features-main.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';


const routes: Routes = [
  {
    path: '',
    component: ClientFeaturesMain,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'packages', component: PackagesComponent, pathMatch: 'full' }

    ]
    
      //#region Credit Cards
    //   {
    //     path: 'tarjetas-de-credito',
    //     component: CreditCardsComponent,
    //     data: {
    //       title: '',
    //       meta: [
    //         {
    //           name: 'description',
    //           content:
    //             ''
    //         }
    //       ]
    //     }
    //   },
//       {
//         path: 'tarjetas-de-credito/resultados',
//         component: ResultsComponent,
//         data: {
//           title: 'Comparador de tarjetas de crédito',
//           meta: [
//             {
//               name: 'description',
//               content:
//                 'Explora entre todas las tarjetas de crédito disponibles en el mercado dominicano. Tarjetas de crédito para viajar, acumular puntos, obtener descuentos, comprar a plazos, recuperar o iniciar el crédito.'
//             }
//           ]
//         }
//       },
//       {
//         path: 'tarjetas-de-credito/resultados/:id',
//         component: SingleCardComponent
//       }
//     ]
//   }
// ];
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientFeaturesRoutingModule { }
