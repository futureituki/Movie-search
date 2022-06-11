import axios from "axios"
import { useEffect, useState } from "react"
import { requestsTv } from "../api/request";

import { movieProps } from "../type/MovieType"

export const Banner = () => {
  const [movie,setMovie] = useState<movieProps>({});

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requestsTv.feachNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]);
      return request;
    }
    fetchData();
  },[]);
  return(
    <>
    <div>

    </div>
    </>
  )
}