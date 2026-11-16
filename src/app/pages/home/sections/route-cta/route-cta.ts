import { Component, input, output } from '@angular/core';
import { Button, type ButtonType } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-route-cta',
  host: { class: 'route-cta' },
  imports: [Button],
  templateUrl: './route-cta.html',
  styleUrl: './route-cta.scss',
})
export class RouteCta {
  public readonly title = input('Соберите свою прогулку');
  public readonly description = input('Выберите места и расставьте остановки в удобном порядке.');
  public readonly buttonLabel = input('Создать маршрут');
  public readonly buttonType = input<ButtonType>('button');
  public readonly disabled = input(false);
  public readonly action = output<void>();
}
