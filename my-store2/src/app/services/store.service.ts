import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs"
import {Product} from "../models/product.model"

@Injectable({
  providedIn: 'root'
})
export class StoreService {

   //variables con los datos de los productos que he seleccionado para el carrito.
   private myShoppingCart: Product[] = [];

   //esto es para hacer la reactividad con el componente nav y que se actualice dinamicamente el valor del carrito.
   private myCart = new BehaviorSubject<Product[]>([]);

   //de la variable myCart le ponemos un signo de pesos al final para que sea un observable
   myCart$ = this.myCart.asObservable();

  //constructor() {}

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    //le ponemos ese valor a myCart para empezar a transmitir los valores.
    this.myCart.next(this.myShoppingCart);
    //console.log(this.myCart)
  }
  getTotal(){
    return this.myShoppingCart.reduce((sum,item) => sum + item.price,0);
  }
  getShoppingCart(){
    return this.myShoppingCart;
  }
}
