import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed',
  pure: false
})
export class CompletedPipe implements PipeTransform {

  /**
   *
   * @param value todolist array
   * @param isCompleted boolean which acts as a filter.
   */
  transform(value: any, isCompleted): any {
    if(value.length > 0) {
      return value.filter((currentValue: any) => currentValue.isCompleted === isCompleted);
    }

    return value;
  }

}
