import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { ResultComponent } from './result/result.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [CalculatorComponent, ResultComponent, ButtonsComponent],
  exports: [CalculatorComponent, ButtonsComponent, ResultComponent],
  imports: [
    CommonModule
  ]
})
export class CalculatorModuleModule { }
