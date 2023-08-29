import { Component } from '@angular/core';
//leer parametros de la url.
import { ActivatedRoute } from '@angular/router';
//importamos el servicio para traer los productos por categoria.
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product.model';
//para evitar el doble subscribe y codigo redudante.
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  //valor por defecto de la variable categoria.
  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  products: Product[] = [];
  productId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){

  }

  ngOnInit(): void {
    //apenas cargue la pagina obtengo el id que viene por url.
    this.route.paramMap
    .pipe(
      switchMap(params =>{
        this.categoryId = params.get('id');
      //con el id de la categoria tomada de la url, hago la peticion http para traer los productos de esa categoria.
      if(this.categoryId){
        return this.productsService.getByCategory(this.categoryId,this.limit, this.offset)

      }
      return [];

      }),
    )
    .subscribe(data => {
      this.products = data;
    })

     //para recoger los datos de los parametros tipo query de la url.
     this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
      console.log(this.productId)
    });
  }


}
