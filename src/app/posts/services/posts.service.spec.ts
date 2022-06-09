import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { Post } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';

import { PostsService } from './posts.service';

describe('PostsService', () => {
    let service: PostsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(PostsService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    
    it ('should make HTTP request when get posts', async () => {
        const request = service.getPosts();
        const response = httpMock.expectOne(environment.postsUrl);
        response.flush([]);
        const posts = await request;
        expect(posts.length).toEqual(0);
    });
});
