export const ROUTES = {
  HOME: "/",
  CHARTS: "/charts",
}

export type RouteKeyType = keyof typeof ROUTES;

export const ROUTE_LABELS: {[key in RouteKeyType]: string} = {
  HOME: "Главная",
  CHARTS: "Чарты",
};