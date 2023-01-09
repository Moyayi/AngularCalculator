import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorModuleModule } from './calculator/calculator.module.module';
import { ButtonsComponent } from './calculator/buttons/buttons.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalculatorModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
