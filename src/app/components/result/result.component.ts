import { Component, Input,Output } from '@angular/core';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor(private servicios : ServiciosService){}

  get previoResultado():string{
    return this.servicios.prevResultado;
  }

  get resultado():string{
    return this.servicios.resultado;
  }
  
}
