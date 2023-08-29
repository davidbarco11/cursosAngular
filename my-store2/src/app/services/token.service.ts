import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  //metodo para guardar el token
  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  //metodo para obtener el token.
  getToken(){
    const token = localStorage.getItem('token');
    return token
  }
}
