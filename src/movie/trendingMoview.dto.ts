export class TrendingMovieDTO {
  id?: number;
  title: string;
  year: number;
  runtime: number;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  poster: string;
  released: Date;
  trendingScore: number;
}
