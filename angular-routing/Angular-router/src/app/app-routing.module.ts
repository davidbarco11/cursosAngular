import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//importamos el servicio para hacer una estrategia de carga personalizada.
import {CustomPreloadService} from './services/custom-preload.service';

//importamos el guardian para proteger rutas.
import { AdminGuard } from './guards/admin.guard';

import { QuicklinkStrategy} from 'ngx-quicklink';
//regla para crear las rutas de la aplicacion.
const routes: Routes = [

  {path: '',
  loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
  data: {
    preload: true
  }
  },
  //para renderizar las rutas de los modulos de la carpera: cms.
  {path: 'cms',
  canActivate: [AdminGuard],
  loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
