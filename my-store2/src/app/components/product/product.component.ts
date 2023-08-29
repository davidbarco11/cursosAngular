import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Product} from "../../models/product.model"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() products: Product = {
    id: "",
    images: [],
    title: "",
    price: 0,
    description:"",
    category:{
      id: "",
      name:"",
    }
  };

  @Output() addedProduct = new EventEmitter<Product>();
  //funcion para adicionar al carrito de compras.
  adicionarCarrito(){
    this.addedProduct.emit(this.products);
  }

  //output para enviar a emitir los datos del producto a enviar el detalle
  @Output() showProduct = new EventEmitter<string>();
  //metodo para mostrar el detalle del producto.
  onShowDetail(){
    this.showProduct.emit(this.products.id);
  }

}
