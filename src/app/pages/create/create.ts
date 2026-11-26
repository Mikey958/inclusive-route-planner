import { Component } from '@angular/core';
import { Breadcrumbs, type BreadcrumbItem } from '../../shared/ui/breadcrumbs/breadcrumbs';

interface PlacePreview {
  readonly name: string;
  readonly address: string;
}

@Component({
  selector: 'app-create-page',
  host: { class: 'create-page' },
  imports: [Breadcrumbs],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class CreatePage {
  public readonly breadcrumbItems: readonly BreadcrumbItem[] = [
    { label: 'Главная', path: '/' },
    { label: 'Создать маршрут' },
  ];

  public readonly places: readonly PlacePreview[] = [
    { name: 'Исторический сквер', address: 'ул. Воеводина, 5' },
    { name: 'Исторический сквер', address: 'ул. Воеводина, 5' },
  ];
}
