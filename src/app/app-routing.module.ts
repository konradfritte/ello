import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { LikesComponent } from './components/likes/likes.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'likes',
    component: LikesComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,

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
