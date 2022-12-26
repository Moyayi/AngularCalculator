import { Injectable, ɵconvertToBitFlags } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }
  private _resultado : string = "";
  private _prevResultado : string = "";

  get resultado():string{
    return this._resultado;
  }

  get prevResultado():string{
    return this._prevResultado;
  }


  addOperation(op : string ){
    this._prevResultado += this._resultado + op;
    this._resultado = "";
  }
  
  addNumber(data : string ){
    this._resultado += data;  
  }

  //TODO check if resultado is empty
  finishOperation(){
    this._resultado = this._prevResultado + this._resultado;
    this._resultado  = eval(this._resultado );
    this._prevResultado = ""
    console.log(this._resultado)
  }
}
