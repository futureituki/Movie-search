import { useEffect, useState } from "react"
import axios from "axios";

import { Movie } from "../type/MovieType";
import { IMAGE_URL } from "../utils/constant";
import { truncate } from "../utils/utils";
import { Link } from "react-router-dom";

export const Search = () => {
  const [word,setWord] = useState<string>('');
  const [movie,setMovie] = useState<Movie[]>([])
  const BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=515c08c892c53bed3e95145407cde7d8&language=ja-JP&query=";

  const getWord = (e:React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  }
  useEffect(()=>{
    async function DataFetch(){
        const request = await axios.get(BASE_URL+word);
        setMovie(request.data.results);
        return request;
      }
      if(word !== ''){
        DataFetch();
      }
    },[word])
  return(
    <>
    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label 
            className="leading-7 text-sm text-gray-600">検索</label>
            <input 
            type="search"
            className="w-7/12 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            onChange={getWord}/>
          </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {movie.map((m,i)=>(
      <div className="p-4 md:w-1/3" key={i}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img 
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={`${IMAGE_URL}${
              m.poster_path ? m.poster_path : m.backdrop_path
          }`}          
          alt={m.name} />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{m.title}</h1>
            <p className="leading-relaxed mb-3">{truncate(m.overview,50)}</p>
            <div className="flex items-center flex-wrap justify-between ">
            <Link to={`${m.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </Link>
              <p><span className="px-3">evaluation</span>{m.vote_average}</p>
            </div>
          </div>
        </div>
      </div>  
      ))}
      </div>
    </div>
      </section>
      </>
  )
}