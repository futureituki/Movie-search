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

export type Movie2 = Movie & {
  videos:boolean,
}
export type Banners = {
  videos:boolean,
  id:string,
}
export type movieProps = {
  title? : string,
  name? : string,
  original_name? : string,
  backdrop_path? : string,
  overview? : string,
}

export type Options = {
  height:string,
  width:string,
  playerVars: {
    autoplay:0 | 1 | undefined
  }
}

