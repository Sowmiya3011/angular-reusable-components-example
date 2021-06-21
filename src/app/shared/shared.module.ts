import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './component/radio/radio.component';
import { TextInputComponent } from './component/text-input/text-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    RadioComponent,
    TextInputComponent
  ],
  declarations: [
    ButtonComponent,
    RadioComponent,
    TextInputComponent
  ],
  providers: [
    ButtonComponent
  ]
})
export class SharedModule { }