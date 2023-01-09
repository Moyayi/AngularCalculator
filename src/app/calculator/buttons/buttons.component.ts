import { Component, NgModule } from '@angular/core';
import { ServiciosService } from 'src/app/service/servicios.service';



// @NgModule({
//   imports: [],
//   exports: [ButtonsComponent],
//   declarations: [ButtonsComponent],
//   providers:[]
// })


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})


export class ButtonsComponent{
  
  constructor(private servicio: ServiciosService){}

  addNumbers(data : string):void{
    this.servicio.addNumber(data);
  }

  addOperation(op : string):void{
    this.servicio.addOperation(op)
  }

  clearEntry(){
      this.servicio.clearEntry()
  }

  clear(){
    this.servicio.clear()
  }

  deleteChar(){
    this.servicio.del();
  }

  porcentaje(){
    this.servicio.porcent();
  }

  partido(){
    this.servicio.partido();
  }

  elevado(){
    this.servicio.elevado();
  }

  raizCuadrada(){
    this.servicio.raizCuadrada()
  }

  reverseOperator(){
    this.servicio.alterExpresion();
  }

  resultado(){
    this.servicio.finishOperation();
  }

  addDecimal(){
    this.servicio.addComma();
  }
}
