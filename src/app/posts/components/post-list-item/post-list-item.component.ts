import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss'], 
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit {
    @Input() post: Post | null = null;
    
    @HostListener('click') onClick() {
        this.router.navigateByUrl(this.getPostProfileUrl())
    }
    
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }
    
    getPostProfileUrl(): string {
        console.log('getPostProfileUrl changeDetection');
        return `/posts/${this.post?.id}`;
    }

}
