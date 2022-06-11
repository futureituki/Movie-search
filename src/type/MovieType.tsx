export type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
  overview : string,
  vote_average: number,
};

export type movieProps = {
  title? : string,
  name? : string,
  original_name? : string,
  backdrop_path? : string,
  overview? : string,
}

