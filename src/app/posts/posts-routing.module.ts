import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';

const routes: Routes = [
    {
        path: ':id',
        component: PostProfilePageComponent 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
