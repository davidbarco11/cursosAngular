import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//importamos el servicio donde se encuentra el estado del usuario.
import { AuthService} from './../services/auth.service';
//para hacer redirecciones cuando el guardian no deje acceder a una pagina.
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.user$
    .pipe(
      map(user =>{
        console.log(user)
        if(user?.role === 'admin'){
          return true;

        }else{
          //redireccionamos a la pagina del /home, cuando no tenga acceso.
          this.router.navigate(['/home']);
          return false;

        }



      })
    )
  }

}
