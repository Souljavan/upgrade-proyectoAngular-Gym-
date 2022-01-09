import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GimnasiosRoutingModule } from './gimnasios-routing.module';
import { GimnasiosComponent } from './components/gimnasios/gimnasios.component';
import {MatCardModule} from '@angular/material/card';
import { GimnasiosDetailComponent } from './components/gimnasios-detail/gimnasios-detail.component';


@NgModule({
  declarations: [
    GimnasiosComponent,
    GimnasiosDetailComponent
  ],
  imports: [
    CommonModule,
    GimnasiosRoutingModule, 
    HttpClientModule,
    MatCardModule
  ]
})
export class GimnasiosModule { }
