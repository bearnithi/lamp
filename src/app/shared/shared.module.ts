import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
