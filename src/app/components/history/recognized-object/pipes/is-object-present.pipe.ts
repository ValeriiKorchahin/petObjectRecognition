import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isObjectPresent'
})
export class IsObjectPresentPipe implements PipeTransform {

  transform(value: number): string {
    return (value === 1) ? 'Yes' : 'No';
  }

}
