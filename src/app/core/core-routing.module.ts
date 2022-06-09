import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent  
    },
    {
        path: 'posts',
        loadChildren: () => import('../posts/posts-routing.module').then((m) => m.PostsRoutingModule)
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
