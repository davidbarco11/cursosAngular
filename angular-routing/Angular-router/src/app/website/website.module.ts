import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SwiperModule } from 'swiper/angular';
import {QuicklinkModule} from 'ngx-quicklink';


import { NavComponent } from './components/nav/nav.component';

import { HomeComponent } from './pages/home/home.component';
//import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

//vamos a recibir los modulos de shared modulo. que importamos allá.
import {SharedModule} from '../../app/shared/shared.module';


@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    //CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
