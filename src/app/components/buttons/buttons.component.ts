import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/service/servicios.service';



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
      alert("WIP")
  }

  clear(){
    alert("WIP")
  }

  deleteChar(){
    alert("WIP")
  }

  partido(){
    alert("WIP")
  }

  elevado(){
    alert("WIP")
  }

  raizCuadrada(){
    alert("WIP")
  }

  reverseOperator(){
    alert("WIP")
  }

  resultado(){
    this.servicio.finishOperation();
  }



  addDecimal(){}
}
