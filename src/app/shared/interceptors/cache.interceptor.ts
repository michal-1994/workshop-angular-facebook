import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpEventType
} from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { environment } from '../../../environments/environment';

const cache = new Map();
const CACHE_TIME = 5;

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

        if (cache.has(request.url)) {
            const record = cache.get(request.url);
            
            if (record.ttl + environment.cacheTime > Date.now()) {
                console.log('%c Cache add: ' + request.url, 'color: green; font-weight: bold;');
                return of(record.response);
            } else {
                console.log('%c Cache delete: ' + request.url, 'color: green; font-weight: bold;');
                cache.delete(request.url);
            }
        }

        return next.handle(request).pipe(
            tap((response) => {
                if (response.type !== HttpEventType.Response) {
                    return;
                }
                cache.set(response.url, {
                    response: response.clone(),
                    ttl: Date.now()
                });
                console.log('%c Cache saving: ' + response.url, 'color: green; font-weight: bold;');
            })
        )
    }
}
