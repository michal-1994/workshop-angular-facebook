import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Home'
    },
    {
        path: 'posts',
        loadChildren: () => import('../posts/posts-routing.module').then((m) => m.PostsRoutingModule)
    },
    {
        path: 'user',
        loadChildren: () => import('../user/user-routing.module').then((m) => m.UserRoutingModule)
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        title: 'NotFound'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
