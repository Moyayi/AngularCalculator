import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { ResultComponent } from '../components/result/result.component';



@NgModule({
  declarations: [CalculatorComponent, ResultComponent],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class CalculatorModuleModule { }
