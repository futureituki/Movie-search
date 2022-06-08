import axios,{AxiosRequestConfig} from "axios";
import { useEffect, useState } from "react";


export const Row :any = () => {
  const [store,setStore] = useState([]);
  const config: AxiosRequestConfig = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    params: {
      part: 'snippet',
      maxResults:5,
      key: process.env.REACT_APP_YOUTUBE_API_KEY  // 取得したAPIキーを設定
    }
  }
  useEffect(()=>{
    async function fetchData(){
      const request = await axios(config)
      setStore(request.data.items);
    }
    fetchData();
  },[])
  console.log(store)
  return(
   <>
   <div>
     {store.map((data:any,i)=>(
       <div>
         <img src={data.snippet.thumbnails.default.url} alt="" />
       </div>
     ))}
   </div>
   </>
  )
}

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
