import { Component, OnInit } from '@angular/core';

//importamos la interfaz que hay en el guardian de exit.guard.ts
import { OnExit } from './../../../guards/exit.guard'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnExit{

  constructor(){

  }

  ngOnInit(): void {

  }
  onExit(){
    const respuesta = confirm("Estas seguro que deseas salir?")
    return respuesta;
  }

}
