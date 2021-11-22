import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'discover',
    component: AppComponent
  },
  {
    path: 'likes',
    component: AppComponent
  },
  {
    path: 'messages',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: 'discover'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
