import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notImages'
})
export class NotImagesPipe implements PipeTransform {

  transform(value: any[], args?: any): string {
    if (value.length > 0)
      return value[0].url;
    return 'assets/img/not-images.png';
  }

}
