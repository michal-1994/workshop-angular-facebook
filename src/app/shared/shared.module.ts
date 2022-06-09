import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';



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
  ]
})
export class SharedModule { }
