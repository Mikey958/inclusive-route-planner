import { Component, computed, input } from '@angular/core';
import { RussianPluralPipe } from '../../pipes/russian-plural.pipe';

@Component({
  selector: 'app-route-card',
  host: { class: 'route-card', role: 'article' },
  imports: [RussianPluralPipe],
  templateUrl: './route-card.html',
  styleUrl: './route-card.scss',
})
export class RouteCard {
  public readonly imageUrl = input.required<string>();
  public readonly imageAlt = input('');
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();
  public readonly distanceKm = input.required<number>();
  public readonly stopsCount = input.required<number>();
  public readonly tags = input<readonly string[]>([]);
  public readonly accessibilityLabel = input<string | null>(null);

  public readonly distanceLabel = computed(() => {
    const formattedDistance = new Intl.NumberFormat('ru-RU', {
      maximumFractionDigits: 1,
    }).format(this.distanceKm());

    return `Около ${formattedDistance} км`;
  });
}
