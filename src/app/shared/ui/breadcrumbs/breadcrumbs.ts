import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  readonly label: string;
  readonly path?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  host: { class: 'breadcrumbs' },
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  public readonly items = input.required<readonly BreadcrumbItem[]>();
}
