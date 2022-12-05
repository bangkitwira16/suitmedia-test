import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { IdeasComponent } from './views/ideas/ideas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ideas',
    component: IdeasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
