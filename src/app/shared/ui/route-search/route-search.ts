import { Component, input } from '@angular/core';

@Component({
  selector: 'app-route-search',
  host: { class: 'route-search' },
  templateUrl: './route-search.html',
  styleUrl: './route-search.scss',
})
export class RouteSearch {
  public readonly placeholder = input('Название, тема или место');
  public readonly filterLabel = input('Фильтры');
}
