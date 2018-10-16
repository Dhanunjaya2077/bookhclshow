import { Pipe, PipeTransform } from '@angular/core';
declare var _: any;
@Pipe({
  name: 'uniqueFilter',
  pure: false
})
export class UniquePipe implements PipeTransform {

  transform(items: any, args?: any): any {
    return _.uniqBy(items, args);
  }

}