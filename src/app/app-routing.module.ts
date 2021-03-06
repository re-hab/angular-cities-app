import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/guards/login-guard.service'
const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
    import('./pages/login/login.module').then((m) => m.LoginModule),
    // pathMatch: 'full' 
  },
  {
    path: 'country',
    loadChildren: () => 
    import('./pages/country/countries.module').then((m) => m.CountriesModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'city/:id',
    loadChildren: () => 
    import('./pages/city/cities.module').then((m) => m.CitiesModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'city',
    loadChildren: () => 
    import('./pages/city/cities.module').then((m) => m.CitiesModule),
    canActivate: [LoginGuard]
  },
  { 
    path: 'error', 
    loadChildren: () => 
    import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  // Because of deploying on github but in production it has to redirect to error page
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
