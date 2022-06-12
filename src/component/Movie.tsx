import axios from "axios";
import { useEffect, useState } from "react";

import {IMAGE_URL} from '../utils/constant'
import { Props , Movie2, Options } from "../type/MovieType";
import { truncate } from "../utils/utils";
import { Link } from "react-router-dom";
import { API_KEY } from "../api/request";
import YouTube from "react-youtube";
import { Banner } from "./Banner";


export const Row = ({ title, fetchUrl , isLargeRow }: Props) => {
  const [movies, setMovie] = useState<Movie2[]>([]);
  const [trailerUrl,setTrailerUrl] = useState<string|null>("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts:Options = {
    height:"390",
    width:"640",
    playerVars:{
      autoplay:1,
    }
  }
  const handleClick = async (movie:Movie2) => {
    if(trailerUrl){
      setTrailerUrl("");
    }else{
        let trailerUrl = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
          )
          setTrailerUrl(trailerUrl.data.results[0]?.key);
        }
      }
      return(
    <>
    <Link to="/"><h3 className="font-bold m-5">{title}</h3></Link>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {movies.map((movie,i)=>(
      <div className="p-4 md:w-1/3" key={i}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img 
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={`${IMAGE_URL}${
              movie.poster_path ? movie.poster_path : movie.backdrop_path
          }`}          
          alt={movie.name}
          onClick={() => handleClick(movie)}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{title}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{movie.name ? movie.name : movie.title }</h1>
            <p className="leading-relaxed mb-3">{truncate(movie.overview,50)}</p>
            <div className="flex items-center flex-wrap ">
              <Link to={`${movie.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </Link>
              <p><span className="px-3">evaluation</span>{movie.vote_average}</p>
            </div>
          </div>
        </div>
      </div>  
      ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
    </section>
    </>
  );
};
// export const YoutubeSearch :any= async () => {
//   try {
//     // console.log(keyword);

//     const config: AxiosRequestConfig = {
//       url: 'https://www.googleapis.com/youtube/v3/search',
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//       },
//       params: {
//         part: 'snippet',
//         maxResults: 50,
//         key: "AIzaSyDl7qDcRIsgaa-Fvn2dLlE57EQ4Hv1UbBs"  // 取得したAPIキーを設定
//       }
//     }
//     const res = await axios(config);

//     console.log(res.data.items);

//     return res.data.items;

//   } catch (error) {
//     throw (error);
//   }
// };
