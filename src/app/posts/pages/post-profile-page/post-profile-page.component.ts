import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-post-profile-page',
    templateUrl: './post-profile-page.component.html',
    styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {
    post: Post | undefined;

    constructor(
        private activatedRoute: ActivatedRoute,
        private postService: PostsService
    ) { }

    ngOnInit(): void {
        this.setupPost();
    }
    
    private async setupPost() {
        const postId = this.activatedRoute.snapshot.params['id'];
        this.post = await this.postService.getPostById(postId);
    }

}
