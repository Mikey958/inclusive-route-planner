export interface RouteCardData {
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description: string;
  readonly distanceKm: number;
  readonly stopsCount: number;
  readonly tags: readonly string[];
  readonly accessibilityLabel: string | null;
  readonly author: string | null;
}

export const featuredRoute: RouteCardData = {
  imageUrl: '/assets/images/route-history.png',
  imageAlt: 'Историческое здание в Екатеринбурге',
  title: 'Исторический пеший маршрут',
  description:
    'От Исторического сквера до Храма на Крови через купеческие особняки и музеи старого города.',
  distanceKm: 2.7,
  stopsCount: 8,
  tags: ['История'],
  accessibilityLabel: 'Доступность для людей с ограниченными возможностями не проверена',
  author: 'Команда Умного Города',
};

export const routeCatalog: readonly RouteCardData[] = [featuredRoute];
