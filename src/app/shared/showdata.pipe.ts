import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showdatafilter'
})
export class ShowdataPipe implements PipeTransform {

  transform(showdata: any,movieName:any): any {

    // Remove the duplicate elements
    let uniqueArray = showdata.filter(function (el, index, array) { 
      return array.indexOf (el) == index;
    });
    return uniqueArray;
    
  }

}