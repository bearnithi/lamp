import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, key): any {
    if (value && key) {
      const filtered = value.filter((cvalue: any) => {
        if (cvalue.firstName.includes(key) || cvalue.lastName.includes(key)) {
          return true;
        }
        return false;
      });

      return filtered;
    }
    return value;
  }

}
