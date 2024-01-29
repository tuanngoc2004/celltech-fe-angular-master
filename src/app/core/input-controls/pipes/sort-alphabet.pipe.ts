import { Pipe, PipeTransform } from '@angular/core';
import {cloneDeep} from 'lodash';

@Pipe({
  name: 'SortAlphabetPipe'
})
export class SortAlphabetPipe implements PipeTransform {

  transform(values: any[], displayField: string | undefined): any[] {
    try {
      return values && values.length > 0 ? cloneDeep(values).sort((a, b) => a && b && displayField ? a[displayField].localeCompare(b[displayField]) : a.name.localeCompare(b.name)) : [];
    } catch (e) {
      return values;
    }
  }

}
