import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent }   from './movie-detail.component';
import { HomeComponent }   from './home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movie-detail/:id',  component: MovieDetailComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}