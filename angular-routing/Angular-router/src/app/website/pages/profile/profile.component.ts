import { Component } from '@angular/core';

//traigo el servicio.
import {AuthService} from '../../../services/auth.service';
//traigo el modelo para el perfil del usuario.
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  user: User | null = null;


  constructor(
    private authService: AuthService
  ){

  }

  ngOnInit() {
    
    //iniciamos el servicio para obtener el perfil del usuario.
    this.authService.user$
    .subscribe(resolve => {
      this.user = resolve;
      console.log(resolve);
    })
  }

}
