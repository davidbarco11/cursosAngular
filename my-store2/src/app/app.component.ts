import { Component } from '@angular/core';

//importamos los servicios de login y de auth para autenticar al usuario y crear usuario.
import {AuthService} from "./services/auth.service";
import {UsersService} from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ){

  }

  imgParent = 'https://picsum.photos/200';
  showImage = true;
  //variable de token inicialmente vacia.
  token = "";



  //funcion para escuchar el evento onLoaded desde el componente hijo.
  onLoaded(img:string){
    console.log(img);
  }
  mostrarImagen(){
    this.showImage = !this.showImage;
  }

  //metodo para crear un usuario.
  createUser(){

    this.usersService.create({
      name: "david",
      email: "david@gmail.com",
      password: "1234567"
    })
    .subscribe(response => {
      console.log("User created",response)
    })
  }

  //metodo para hacer login a un usuario.
  login(){
    const email = "david@gmail.com";
    const password = "1234567";
    this.authService.login(email,password)
    .subscribe(response => {
      //console.log("User logueado",response.access_token);
      //cuando nos logueamos guardamos el token en la variable.
      this.token = response.access_token;
      
    })
  }

  //metodo para sacar la informacion del perfil del usuario logueado.
  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile =>{
      console.log("datos usuario logueado enviandole el token",profile);
    })
  }


}
