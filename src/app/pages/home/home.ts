import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featuredRoute } from '../../data/routes';
import { RouteCard } from '../../shared/ui/route-card/route-card';
import { Hero } from './sections/hero/hero';
import { RouteCta } from './sections/route-cta/route-cta';

@Component({
  selector: 'app-home',
  imports: [Hero, RouteCard, RouteCta, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public readonly featuredRoute = featuredRoute;
}
