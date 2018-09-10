import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, limit?: number): any {
   if (!value){
return null;

   }
   return value.substr(0, limit)+'...';
  }

}
