import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
//import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

//importamos el guardian para proteger rutas.
import { AuthGuard } from './../guards/auth.guard';

//importamos el guardian para cuando se salga de la ruta.
import { ExitGuard } from './../guards/exit.guard';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
    data: {
      preload: true
    }
    },
    {path: 'miCart', component: MycartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', canDeactivate: [ExitGuard], component: RegisterComponent},
    {path: 'recovery', component: RecoveryComponent},
    {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
    {path: 'product/:id', component: ProductDetailComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
