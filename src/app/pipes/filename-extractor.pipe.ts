import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'extractFilename'})
export class ExtractFilenamePipe implements PipeTransform {
  transform(value: string): string {
    return /.*\/(.*)$/.exec(value)[1];
  }
}
