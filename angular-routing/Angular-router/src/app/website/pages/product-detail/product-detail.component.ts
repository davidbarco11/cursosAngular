import { Component } from '@angular/core';
//leer parametros de la url.
import { ActivatedRoute, Router } from '@angular/router';
//para evitar el doble subscribe y codigo redudante.
import {switchMap} from 'rxjs/operators';
//importamos el servicio para traer los productos por categoria.
import { ProductsService } from '../../../services/products.service';
//modelo de los productos.
import { Product } from '../../../models/product.model';
//navegacion de ruta.
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  //valor por defecto de la variable detalle.
  productId: string | null = null;
  //variable de tipo producto o puede ser nulo tambien.
  product: Product | null= null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location,
    private router: Router
  ){

  }


  ngOnInit(): void {
    //apenas cargue la pagina obtengo el id que viene por url.
    this.route.paramMap
    .pipe(
      switchMap(params =>{
        this.productId = params.get('id');
      //con el id del producto tomada de la url, hago la peticion http para traer los productos de esa categoria.
      if(this.productId){
        return this.productsService.getOne(this.productId);

      }
      //en el caso que no encuentre el producto retornaremos un nulo.
      return [null];

      }),
    )
    .subscribe(data => {
      this.product = data;
      console.log(this.product);
    })
  }

  //funcion para regresar atras.
  goToBack(id:any){
    //this.location.back();
    this.router.navigate(['/category', id]);

  }

}
