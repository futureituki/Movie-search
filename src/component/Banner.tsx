import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { API_KEY, BASE_URL } from "../api/request";
import { Banners, movieProps } from "../type/MovieType"
import { IMAGE_URL } from "../utils/constant";
import {Options} from '../type/MovieType'
export const Banner = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState<movieProps>({});
  const [trailerUrl,setTrailerUrl] = useState<string|null>("");
  const opts:Options = {
    height:"390",
    width:"640",
    playerVars:{
      autoplay:1,
    }
  }
  const location = useLocation();
  useEffect(()=>{
    async function fetchData(){
      if(String(location.pathname).indexOf('movie') !== -1){
        const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
        setTrailerUrl(request.data.results[0]?.key);
        return request;
      }else{
        const request = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
        setMovie(request.data)
        return request;
      }
    }
      fetchData();
    console.log(movie)
  },[]);
  return(
    <>
    <div>
      <h1>Banner</h1>
      {trailerUrl ? 
      <YouTube videoId={trailerUrl} opts={opts}/> :
      <header 
      className="w-9/12 bg-auto bg-center bg-no-repeat" 
      style={{
        height:"400px",
        backgroundImage: `url("https://image.tmdb.org/t/p/w200/tUyMPMJlql8Ec7d58EIhX5WEGG4.jpg")`,
      }}></header>
      }
      {/* // {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      // <img src={`${IMAGE_URL}${movie.backdrop_path}`} alt="" /> */}
    </div>
    </>
  )
}