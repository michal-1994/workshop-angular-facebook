import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { PostsRoutingModule } from './posts-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
    declarations: [
        PostListItemComponent,
        PostListComponent,
        PostProfilePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        PostsRoutingModule,
        NgxPaginationModule
    ],
    exports: [
        PostListComponent
    ],
    providers: [
        PostsService
    ]
})
export class PostsModule { }
