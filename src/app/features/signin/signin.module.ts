import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinginRoutingModule } from './signin-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SinginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class SigninModule { }
