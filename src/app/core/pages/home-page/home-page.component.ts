import { Component, OnInit } from '@angular/core';
import { Post } from '../../../posts/interfaces/post.interface';
import { PostsService } from '../../../posts/services/posts.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    isPostLoaded = false;
    posts: Post[] = [];
    
    constructor(
        private postsService: PostsService
    ) { }

    ngOnInit(): void {
        this.setupPosts();
    }
    
    private async setupPosts() {
        this.posts = await this.postsService.getPosts();
        this.isPostLoaded = true;
    }
        
}
