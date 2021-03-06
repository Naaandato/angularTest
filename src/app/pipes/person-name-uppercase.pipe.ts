import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personNameUppercase'
})
export class PersonNameUppercasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `${value.toUpperCase()}, have a nice day!`;
    //return value.toUpperCase() + ' have a nice day!';
  }

}
