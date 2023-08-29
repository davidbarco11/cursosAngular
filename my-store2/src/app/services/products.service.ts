import { Injectable } from '@angular/core';
//servicio propio de angular para hacer peticiones.
import {HttpClient, HttpParams} from "@angular/common/http";
import { Product, CreateProductDTO,UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = "https://young-sands-07814.herokuapp.com/api/products";

  constructor(
    //inyectamos el servicio.
    private http: HttpClient
  ) { }

  //metodo para hacer llamada a la api y traer todos los productos, y tambien si se le pasan los parametros de limit y offset pueden traer productos de forma para hacer paginacion.
  getAllProducts(limit?:number, offset?: number) {
    let params = new HttpParams();
    if(limit != undefined && offset != undefined){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  //metodo para traer los datos de un solo producto, para hacer el detalle.
  getProduct(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  //metodo para crear un producto.
  create(data: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, data)
  }

  //metodo para actualizar un producto
  update(id:any,data: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data)
  }

  //tarea, hacer el metodo del delete.
  delete(id:any){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }

  //metodo para obtener los productos por alguna pagina en especifico
  /* getProductsByPage(limit:number, offset: number){
    return this.http.get<Product[]>(this.apiUrl, {
      params: {limit, offset}
    });

  }*/

}
