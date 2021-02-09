import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/guards/login-guard.service'
const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
    import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'country',
    loadChildren: () => 
    import('./pages/country/countries.module').then((m) => m.CountriesModule),
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
