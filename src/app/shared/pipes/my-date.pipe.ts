import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        if (!value) {
            return '';
        }
        const date = new Date(value as string);
        if (date.toString() == 'Invalid Date') {
            return '';
        }
        return date.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

}
