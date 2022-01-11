import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupRoutingModule } from './singup-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SingupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class SingupModule { }
