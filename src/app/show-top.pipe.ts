import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showTop'
})
export class ShowTopPipe implements PipeTransform {

  transform(value:Array<any>, itemsToShow:number):any {
    return value.slice(0, itemsToShow);
  }

}
