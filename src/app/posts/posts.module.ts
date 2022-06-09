import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        PostListItemComponent,
        PostListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule
    ],
    exports: [
        PostListComponent
    ],
    providers: [
        PostsService
    ]
})
export class PostsModule { }
