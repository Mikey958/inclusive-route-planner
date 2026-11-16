import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({ name: 'russianPlural' })
export class RussianPluralPipe implements PipeTransform {
  public transform(value: number, one: string, few: string, many: string): string {
    if (!Number.isFinite(value)) {
      return many;
    }

    const count = Math.abs(Math.trunc(value));
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return many;
    }

    const lastDigit = count % 10;

    if (lastDigit === 1) {
      return one;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return few;
    }

    return many;
  }
}
