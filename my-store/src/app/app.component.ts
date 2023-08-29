import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-barco';
  name = "david";
  age = 32;


  //funcion para sumar edad
  cambiarEdad(){
    this.age++;
  }
  newName = "";
  //funcion para agregar nombre
  agregarNombre(){
    if(this.newName == ""){
      return alert("el input no puede estar vacio")
    }
    this.nombres.push(this.newName);
    this.newName = "";
  }
  //funcion para borrar un nombre.
  borrar(indice:number){
    this.nombres.splice(indice, 1);

  }
  //array de nombres con tipado de array de string.
  nombres : string[] = ["david", "pedro", "maria", "isabel"];

  //array de productos.
  products = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://st2.depositphotos.com/1000459/10669/i/450/depositphotos_106693308-stock-photo-toy-car-isolated-on-white.jpg',
      category: 'all',
    },
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://st2.depositphotos.com/1000459/10669/i/450/depositphotos_106693308-stock-photo-toy-car-isolated-on-white.jpg',
      category: 'all',
    },
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://st2.depositphotos.com/1000459/10669/i/450/depositphotos_106693308-stock-photo-toy-car-isolated-on-white.jpg',
      category: 'all',
    },
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://st2.depositphotos.com/1000459/10669/i/450/depositphotos_106693308-stock-photo-toy-car-isolated-on-white.jpg',
      category: 'all',
    },
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://st2.depositphotos.com/1000459/10669/i/450/depositphotos_106693308-stock-photo-toy-car-isolated-on-white.jpg',
      category: 'all',
    },
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://st2.depositphotos.com/1000459/10669/i/450/depositphotos_106693308-stock-photo-toy-car-isolated-on-white.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://st2.depositphotos.com/1000459/10669/i/450/depositphotos_106693308-stock-photo-toy-car-isolated-on-white.jpg'
    },

  ]

}
