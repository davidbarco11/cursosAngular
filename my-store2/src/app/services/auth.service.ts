import { Injectable } from '@angular/core';
//para hacer peticiones http
import {HttpClient} from "@angular/common/http";

//importamos el modelo de auth.
import {Auth} from '../models/auth.model';
//importamos el modelo de usuario.
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //api de nuestro backend.
  private apiUrl = "https://young-sands-07814.herokuapp.com/api/auth";

  constructor(
    //inyectamos el servicio.
    private http: HttpClient
  ) { }

  //metodo de login.
  //nota: podriamos crear un dto , pero como son tan poquito voy a colocar los parametros directamente en el metodo:email y password.
  login(email: string, password: string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
  }

  //metodo para saber el perfil del usuario.
  profile(token: string){
    return this.http.get<User>(`${this.apiUrl}/profile`,{
      headers: {'Authorization': 'Bearer ' + token}
    })
  }
}
