import { Injectable, ɵconvertToBitFlags } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }
  private _resultado : string = "";
  private _prevResultado : string = "";
  private _comma : boolean = true;
  get resultado():string{
    return this._resultado;
  }

  get prevResultado():string{
    return this._prevResultado;
  }

  checkError():boolean {
    let status : boolean = false;
    if(this._resultado === "Error!" 
    || this._resultado === "undefined"
    || this._resultado === "NaN"){
      console.log("entra en el estado de Error undefined o NaN")
      status = true;
    }
    return status;
  }
  checkEmpty():boolean{
    let status : boolean = true;
    if(this._resultado === ""){
      status = false;
    }
    return status;
  }

  addComma(){
    if(this._comma){
      this._resultado += '.'
      this._comma = false;
    }
  }

  addOperation(op : string ){
    this._prevResultado += this._resultado +" "+ op;
    this._resultado = "";
    this._comma = true;
  }
  
  addNumber(data : string ){
    if(this._resultado === "0" && this._resultado.length === 1) this._resultado = ""
    if(this.checkError()){
      this._resultado = ""
    }
    this._resultado += data;  
  }

  //TODO check if resultado is empty
  //TODO if nothing add 0 before value
  finishOperation(){
    if(this.checkEmpty()){
      this._resultado = this._prevResultado + this._resultado;
      try {
        this._resultado  = eval(this._resultado ).toString();
        if(!this._resultado.includes('.')) this._comma = true;
      } catch (error) {
        this._resultado = "Error!"
      }
    }else{
      this._resultado = "0";
    }
    this._prevResultado = ""
  }

  clear(){
    this._resultado = "";
    this._prevResultado = "";
  }
  
  del(){
    if(this.checkError()){
      this,this._resultado = ""
    }else{
      if(typeof(this._resultado) === "number"){
        
      }
      this._resultado = this._resultado.slice(0,-1)
      
    }
    
  }

  clearEntry(){
    this._resultado = "";   
  }
  
  alterExpresion(){
    if(this.checkError()){
      this._resultado = ""
    }else if(this.checkEmpty()){
      this._resultado = eval(`- (${this._resultado})`).toString();
    }
  }

  raizCuadrada(){
    this._resultado = Math.sqrt(parseInt(this._resultado)).toString();
  }

  porcent() {
    if(this.checkError()){
      this._resultado = eval("0/100").toString()
    }else {
      this._resultado = eval(`${this._resultado}/100`).toString();
    }
  }

  elevado(){
      this._resultado = eval(`${this._resultado} * ${this._resultado}`).toString();
  }

  partido(){
    this._resultado = eval(`1/${this._resultado}`).toString();
  }
}
