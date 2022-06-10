import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
    declarations: [
        HighlightDirective,
        MyDatePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HighlightDirective,
        MyDatePipe
    ],
    providers: [
        {
            useClass: CacheInterceptor,
            provide: HTTP_INTERCEPTORS,
            multi: true
        }
    ]
})
export class SharedModule { }
