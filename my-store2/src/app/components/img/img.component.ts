import { Component, Input, Output,EventEmitter, OnChanges, AfterViewInit,OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges ,AfterViewInit, OnDestroy,OnInit{

  //el arroba input se pone para preparar la variable y poder recibir informacion desde el componente padre.
  @Input() img = "Valor inicial";
  @Output() loaded = new EventEmitter<string>();
  imgDefault = "https://picsum.photos/206";
  counter = 0;

  //funcion para manejar los errores.
  imgError(){
    this.img = this.imgDefault;

  }
  //funcion para enviar mensaje cuando imagen haya sido cargada.
  imgCargada(){
    this.loaded.emit(this.img);
    //alert("cargada");
  }

  //----------------------------------------------------------------------------------------//
   /*Ciclos de vida de componentes*/
   constructor() {
    //Corre antes del render - NO correr peticiones async - corre una sola vez
    console.log('Constructor', 'ImgValue =>', this.img);
  }

  ngOnChanges(): void {
    //Corre antes del render - evalua cambios - corre muchas veces
    console.log('OnChanges', 'ImgValue =>', this.img);
  }

  ngOnInit(): void {
    //Corre antes del render - SI podemos correr peticiones async - fetch - corre una sola vez
    console.log('ngOnInit', 'ImgValue =>', this.img);
    //funcion para incrementar la variable cada segundo.
    /* setInterval(() => {
    this.counter++;

    },1000) */
  }

  ngAfterViewInit(): void {
    //Corre despues del render - aca se manipulan los componentes hijos - relacionado con directivas
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //Corre solo cuando se elimina un componente
    console.log('ngOnDestroy');
  }

  /*FIN Ciclos de vida de componentes*/

}
