import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../services/store.service'
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

//importamos el servicio de categorias para traer las categorias y colocarlas en el menu de navegacion.
import {CategoriesService} from '../../../services/categories.service';
import { Category } from '../../../models/category.model';

//importamos para hacer redirecciones.
import {Router} from '@angular/router'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = []; //array de categorias que inicia en vacio.


  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    //traemos las categorias.
    this.getAllCategories();

    //obtenemos el perfil del usuario si existe.
    this.authService.user$
    .subscribe(user => {
      this.profile = user;
    })

  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.loginAndGet('john@mail.com', 'changeme')
    .subscribe(() => {
      //redireccionar al /home
      this.router.navigate(['/profile']);
    });
  }

  //metodo para cerrar sesion.
  logout(){
    this.authService.logout();
    //limpio la varible del usuario.
    this.profile = null;
    //redireccionar al /home
    this.router.navigate(['/home']);

  }
  //metodo para traer todas las categorias.
  getAllCategories() {
    this.categoriesService.getAll()
    .subscribe(categories => {
      console.log(categories);
     this.categories = categories;
    })
  }

}
