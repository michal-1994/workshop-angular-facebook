import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, lastValueFrom, filter } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Post } from '../interfaces/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(
        private http: HttpClient
    ) { }

    getPosts(): Promise<Post[]> {
        return this.makeRequest<Post[]>(environment.postsUrl);
    }

    getPostById(postId: string) {
        return this.makeRequest<Post>(`${environment.postsUrl}/${postId}`);
    }

    private makeRequest<T>(url: string): Promise<T> {
        return lastValueFrom<T>(this.http.get<T>(url)
            .pipe(
                delay(500)
            )
        );
    }

    private fakeRequest<T>(url: string): Promise<T> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([] as unknown as T)
            }, 2000);
        })
    }

}
