import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(res: any, term: any): any {
   if (term === undefined) return res;
   
   return res.filter(function(ninja){
     //console.log(profiles)
     return ninja.branch.toLowerCase().includes(term.toLowerCase());
   })
  }

}
