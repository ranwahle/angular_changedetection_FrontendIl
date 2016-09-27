import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropdownFilter'
})
export class DropdownFilterPipe implements PipeTransform {

  transform(source:any, filterBy:string, filterProperty:string): any {
    if (!filterBy || !source || !source.length || !source.filter ||  (
      !source[0][filterProperty] && typeof  source[0] === 'object')) {
      return source;
    }
    let searchExpression = item => {
      let  searchedString = item[filterProperty] || item;
      if (typeof searchedString !== 'string'){
        return true;
      }

      return searchedString.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1;
    };
    return source.filter(searchExpression);
  }

}
