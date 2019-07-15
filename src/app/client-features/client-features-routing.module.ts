import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFeaturesMain } from './client-features-main/client-features-main.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BookingComponent } from './pages/booking/booking.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ModelsComponent } from './pages/models/models.component';
import { SingleModelComponent } from './pages/models/single-model/single-model.component';


const routes: Routes = [
  {
    path: '',
    component: ClientFeaturesMain,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'packages', component: PackagesComponent, pathMatch: 'full' },
      { path: 'booking', component: BookingComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactUsComponent, pathMatch: 'full' },
      { path: 'gallery', component: GalleryComponent, pathMatch: 'full' },
      { path: 'models', component: ModelsComponent, pathMatch: 'full' },
      { path: 'models/:id', component: SingleModelComponent, pathMatch: 'full' }
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
