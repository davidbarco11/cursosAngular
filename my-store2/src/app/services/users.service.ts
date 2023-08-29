import { Injectable } from '@angular/core';

//para hacer peticiones http
import {HttpClient} from "@angular/common/http";
//importamos el dt de usuarios.
import { User,CreateUserDTO} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //api de nuestro backend.
  private apiUrl = "https://young-sands-07814.herokuapp.com/api/users";

  constructor(
    //inyectamos el servicio.
    private http: HttpClient
  ) { }

  //metodo para crear un usuario.
  create(data: CreateUserDTO){
    return this.http.post<User>(this.apiUrl, data)
  }

  //metodo para obtener todos los usuarios.
  getAll(){
    return this.http.get<User[]>(this.apiUrl)
  }


}
