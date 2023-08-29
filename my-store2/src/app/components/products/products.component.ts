import { Component,OnInit } from '@angular/core';
import {Product, CreateProductDTO, UpdateProductDTO} from "../../models/product.model"
//importamos el servicio, para usar los metodos globales que alli están.
import {StoreService} from "../../services/store.service"
import {ProductsService} from "../../services/products.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  //variables con los datos de los productos que he seleccionado para el carrito.
  myShoppingCart: Product[] = [];
  //total de precio de los productos agregados.
  total = 0;
  today = new Date();
  dateFinal = new Date("2023-07-06");

  //productos.
  products: Product[] = [];
  showProductsDetail = false;
  productChosen: Product = {

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
  //estas variables son para hacer que carguen el resto de productos.
  limit = 10;
  offset = 0;
  botonCargar = "Cargar mas";

  //inyectamos en nuestro constructor el servicio.
  constructor(
  private storeService : StoreService,
  private productsService : ProductsService,

  ) {this.myShoppingCart = this.storeService.getShoppingCart()}


  //metodo para hacer peticion y llenar el arreglo de productos
  ngOnInit(): void {
    this.loadMore();
  }

  //imagenes random por si la api que usamos tiene problemas al traer las imagenes y cargarlas.
  imagenesRandom = ["https://picsum.photos/206","https://picsum.photos/205","https://picsum.photos/208"]

  //metodo para añadir productos al carrito
  onAddedToShoppingCart(product: Product){

    this.storeService.addProduct(product);

    //this.myShoppingCart.push(product);
    //se aplica un metodo reduce para que calcule la suma del precio, en la variable price del arreglo.
    this.total = this.storeService.getTotal();
    //this.total = this.myShoppingCart.reduce((sum,item) => sum + item.price,0);
    console.log(this.myShoppingCart)
  }

  //mostrar u ocultar la ventana de detalle del productos
  toggleProductDetail(){
    this.showProductsDetail = !this.showProductsDetail;
  }

  onShowDetail(id: string){
    this.productsService.getProduct(id)
    .subscribe(data => {
      //activamos el modal para que se muestre.
      this.toggleProductDetail();
      //guardamos la informacion del detalle del producto en la variable productChosen.
      this.productChosen = data;
      console.log(this.productChosen)
    }, response =>{
      alert(response.error.message);
    });

  }


  createNewProduct(){
    const product: CreateProductDTO = {
    images: ["https://picsum.photos/206"],
    title: "Nuevo producto",
    price: 45,
    description:"descripcion del nuevo producto",
    categoryId:1
    }
    this.productsService.create(product)
    .subscribe(data => {
      //insertar nuestro arreglo de producto creado al array de productos.
      this.products.unshift(data);
     //console.log(data);
    })
  }

  //metodo para editar un producto
  updateProduct(){
    const changes: UpdateProductDTO = {
      title: "titulo editado"
    }
    //tomo el id del producto que se ha escogido
    const id = this.productChosen.id;
    this.productsService.update(id,changes)
    .subscribe(data => {
      //encuentra el producto por el id para actualizarlo.
      const productIndex = this.products.findIndex(item => item.id === id);
      //en el productos con tal id, ponga la nueva informacion actualizada que viene en la variable : data.
      this.products[productIndex] = data;
      //actualizo tambien la informacion del modal escogido del producto.
      this.productChosen = data;
      //console.log("actualizado",data);
    })
  }

  //metodo para eliminar un producto.
  deleteProduct(){
    //tomo el id del producto que se ha escogido
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(data => {
      //encuentra el producto por el id para eliminarlo.
      const productIndex = this.products.findIndex(item => item.id === id);
      this.products.splice(productIndex, 1);
      //cerramos el modal
      this.showProductsDetail = false;
    })

  }

  //metodo de cargar mas, para que carguen mas productos.
  loadMore(){
    //aqui se le puede enviar los parametros de limit y offset opcionales para cargar todos los productos. o enviarselos con un valor para crear la paginacion,
    this.productsService.getAllProducts(this.limit,this.offset)
    .subscribe(data => {
      //validar si trae datos desaparecer el boton de cargar mas.
      //console.log(data);
      if(data.length === 0){
       this.botonCargar = "Fin productos"
      }else{
      //concateno los productos que hay con los nuevos que estoy cargando.
      this.products = this.products.concat(data);
      this.offset += this.limit
      }
    });

  }




}
