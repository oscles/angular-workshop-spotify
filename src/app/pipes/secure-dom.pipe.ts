import { DomSanitizer } from '@angular/platform-browser';


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'secureDom' })
export class SecureDomPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value); 
  }

}
