import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  //metodo para eliminar del local storage la variable token, la cual tiene el token de autenticacion del usuario.
  //tambien se puede decir que es el metodo para cerrar sesion.
  removeToken() {
    localStorage.removeItem("token");
  }
}
