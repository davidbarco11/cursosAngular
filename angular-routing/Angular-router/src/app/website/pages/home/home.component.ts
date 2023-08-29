import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product.model';
//se utiliza para acceder a los parámetros de la URL y a otros datos relacionados con la ruta activa.
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  limit = 10;
  offset = 0;
  productId: string | null = null;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.productsService.getAll(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });

    //para recoger los datos de los parametros tipo query de la url.
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
      console.log(this.productId)
    });

  }

  onLoadMore(){
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

}
