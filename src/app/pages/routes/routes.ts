import { Component } from '@angular/core';
import { routeCatalog } from '../../data/routes';
import { RussianPluralPipe } from '../../shared/pipes/russian-plural.pipe';
import { Breadcrumbs, type BreadcrumbItem } from '../../shared/ui/breadcrumbs/breadcrumbs';
import { RouteCard } from '../../shared/ui/route-card/route-card';
import { RouteSearch } from '../../shared/ui/route-search/route-search';

@Component({
  selector: 'app-routes-page',
  host: { class: 'routes-page' },
  imports: [Breadcrumbs, RouteCard, RouteSearch, RussianPluralPipe],
  templateUrl: './routes.html',
  styleUrl: './routes.scss',
})
export class RoutesPage {
  public readonly breadcrumbItems: readonly BreadcrumbItem[] = [
    { label: 'Главная', path: '/' },
    { label: 'Маршруты' },
  ];

  public readonly city = 'Екатеринбург';
  public readonly routes = routeCatalog;
}
