import { Component, OnInit } from '@angular/core';
import { Post } from '../../../posts/interfaces/post.interface';
import { PostsService } from '../../../posts/services/posts.service';
import { Sorter } from '../../../shared/helpers/sorter';
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
        const posts = await this.postsService.getPosts();
        const mapTo = (post: Post) => new Date(post.createdTime).getTime();
        this.posts = Sorter.sortBy(posts, mapTo);   
        this.isPostLoaded = true;
    }
        
}
