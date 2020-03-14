import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fliterlist'
})
export class FliterlistPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    if(!args)
     return value;
    return value.filter(
      item => item.name.toLowerCase().indexOf(args.toLowerCase()) > -1
   );
  }

}