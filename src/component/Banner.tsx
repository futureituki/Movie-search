import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../api/request";
import { Banners } from "../type/MovieType"
import { DETAIL_IMAGE_URL } from "../utils/constant";
import {Options} from '../type/MovieType';
import { Link } from "react-router-dom";

export const Banner = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState<Banners>({});
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
        // const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
        const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ja-JP`);
        setMovie(request.data)
        return request;
      }else if(String(location.pathname).indexOf('tv') !== -1){
        const request = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ja-JP`);
        setMovie(request.data)
        console.log(movie)
        return request;
      }else{
        const request = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ja-JP`);
        setMovie(request.data)
        console.log(movie)
        return request;
      }
    }
      fetchData()
  },[])
  return(
    <>
    <div>
    <Link to="/"><h3 className="font-bold m-5">TV</h3></Link>
      <h1 className="font-bold text-4xl p-12 text-center ">{movie.title ? movie.title : movie.name}</h1>
      <h2 className="text-right font-medium text-2xl">公開日 {movie.release_date ? movie.release_date : movie.first_air_date}</h2>
      <h3 className="text-right font-medium text-2xl"><a href={movie.homepage}>homePage {movie.homepage}</a></h3>
      <div className="p-8 text-center w-8/12 mx-auto">
       <header 
       className="w-9/12 bg-auto bg-center bg-no-repeat"  
       style={{
         height:"400px",
         backgroundImage: `url("${DETAIL_IMAGE_URL}${movie.backdrop_path}")`,
       }}></header> 
       <p>{movie.overview ? movie.overview : "説明はありません"}</p>
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
    </>
  )
}