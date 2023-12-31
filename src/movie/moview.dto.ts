export class MoviewDto {
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
  genreIds: number[];
}
