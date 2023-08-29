import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//importamos el servicio que maneja el token.
import {TokenService} from './../services/token.service';

//importamos el servicio que maneja la autenticacion del usuario.
import {AuthService} from './../services/auth.service';

//para hacer redirecciones cuando el guardian no deje acceder a una pagina.
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //condicional para saber si existe un token valido, y si existe puedo dejar acceder al usuario a la pagina de profile.

    /* const token = this.tokenService.getToken();
    if(token){
    alert("si puedes acceder a la pagina.");
    return true;
    }else{
    //redireccionamos a la pagina del /home, cuando no tenga acceso.
    this.router.navigate(['/home']);
    //return false: para que no pueda acceder a una ruta, return : true, para si poder acceder.
    return false;
    } */
    return this.authService.user$
    .pipe(
      map(user =>{
        if(!user){
          //redireccionamos a la pagina del /home, cuando no tenga acceso.
          this.router.navigate(['/home']);
         //return false: para que no pueda acceder a una ruta, return : true, para si poder acceder.
         return false;
        }

        return true;

      })
    )


  }

}
