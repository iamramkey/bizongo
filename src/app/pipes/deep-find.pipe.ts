import { Pipe, PipeTransform } from '@angular/core';
import { ObjectUtils } from '../services/object-utils.service';

@Pipe({ name: 'deepFind', pure: true })
export class ReadNestedPropertyPipe implements PipeTransform {
  public transform(obj, readKey: string) {
    if (obj instanceof Object && (readKey || '').toString().trim().length > 0) {
      return ObjectUtils.deepFind(obj, readKey);
    }
    return null;
  }
}
