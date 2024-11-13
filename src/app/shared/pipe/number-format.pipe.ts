import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';

    const numberString = value.toString();
    const [wholePart, decimalPart] = numberString.split('.');

    if (wholePart.length <= 3) {
      return decimalPart ? `${wholePart}.${decimalPart}` : `${wholePart}.00`;
    }

    const lastThreeDigits = wholePart.slice(-3);
    const otherDigits = wholePart.slice(0, -3);
    const formattedOtherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',');

    const formattedNumber = formattedOtherDigits + ',' + lastThreeDigits;

    return decimalPart ? `${formattedNumber}.${decimalPart}` : `${formattedNumber}.00`;
  }
}
