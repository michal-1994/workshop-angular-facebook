import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostListItemComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostsModule { }
