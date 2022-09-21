import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcage'
})
export class CalcagePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    let today = new Date();
    let milisec_diff = Math.abs(value.getTime() - today.getTime());
    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    return years + ' Years';
  }
}
