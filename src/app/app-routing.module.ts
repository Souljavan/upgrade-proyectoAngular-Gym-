import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: `user-profile/:id`, loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('./features/singup/singup.module').then(m => m.SingupModule)
  },
  {
    path: `gimnasios`, loadChildren: () =>
      import('./features/gimnasios/gimnasios.module').then(m => m.GimnasiosModule),canActivate: [AuthGuard]
  },
  {
    path: `log-in`, loadChildren: () =>
      import('./features/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: `home`, loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
