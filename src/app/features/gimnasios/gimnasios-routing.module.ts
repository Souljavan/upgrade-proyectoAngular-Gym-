import { GimnasiosDetailComponent } from './components/gimnasios-detail/gimnasios-detail.component';
import { GimnasiosComponent } from './components/gimnasios/gimnasios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:GimnasiosComponent},
  {path:'detail', component:GimnasiosDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GimnasiosRoutingModule { }
