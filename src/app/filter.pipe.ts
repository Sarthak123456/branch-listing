import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(profiles: any, term: any): any {
   if (term === undefined) return profiles;
   
   return profiles.filter(function(ninja){
     //console.log(profiles)
     return ninja.login.toLowerCase().includes(term.toLowerCase());
   })
  }

}
