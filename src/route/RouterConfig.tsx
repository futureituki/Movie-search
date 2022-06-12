import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "../App";
import { Row } from "../component/Movie";
import { requestsTv,requestsMovie } from "../api/request";
import { Banner } from "../component/Banner";

export const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/tv/trending" element={<Row title={"NETFLIX TRENDING"} fetchUrl={requestsTv.feachTrending}/>}/>
        <Route path="/tv/original" element={<Row title={"NETFLIX ORIGUINALS"} fetchUrl={requestsTv.feachNetflixOriginals}/>}/>
        <Route path="/tv/action" element={<Row title={"NETFLIX ACTION"} fetchUrl={requestsTv.feactActionMovies}/>}/>
        <Route path="/tv/toprated" element={<Row title={"NETFLIX TOPRATED"} fetchUrl={requestsTv.feactTopRated}/>}/>
        <Route path="/tv/comedian" element={<Row title={"NETFLIX COMEDY"} fetchUrl={requestsTv.feactComedyMovies}/>}/>
        <Route path="/tv/horror" element={<Row title={"NETFLIX HORROR"} fetchUrl={requestsTv.feactHorrorMovies}/>}/>
        <Route path="/tv/romance" element={<Row title={"NETFLIX ROMANCE"} fetchUrl={requestsTv.feactRomanceMovies}/>}/>
        <Route path="/tv/document" element={<Row title={"NETFLIX DOCUMENT"} fetchUrl={requestsTv.feactDocumentMovies}/>}/>

        <Route path="/movie/trending" element={<Row title={"NETFLIX TRENDING"} fetchUrl={requestsMovie.MovieTrending}/>}/>
        <Route path="/movie/original" element={<Row title={"NETFLIX ORIGINAL"} fetchUrl={requestsMovie.MovieNetflixOriginals}/>}/>
        <Route path="/movie/toprated" element={<Row title={"NETFLIX TOPRATED"} fetchUrl={requestsMovie.MovieTopRated}/>}/>
        <Route path="/movie/action" element={<Row title={"NETFLIX ACTION"} fetchUrl={requestsMovie.MovieActionMovies}/>}/>
        <Route path="/movie/comedian" element={<Row title={"NETFLIX COMEDY"} fetchUrl={requestsMovie.MovieComedyMovies}/>}/>
        <Route path="/movie/horror" element={<Row title={"NETFLIX DOCUMENT"} fetchUrl={requestsMovie.MovieHorrorMovies}/>}/>
        <Route path="/movie/romance" element={<Row title={"NETFLIX ROMANCE"} fetchUrl={requestsMovie.MovieRomanceMovies}/>}/>
        <Route path="/movie/document" element={<Row title={"NETFLIX DOCUMENT"} fetchUrl={requestsMovie.MovieDocumentMovies}/>}/>

        <Route path="tv/trending/:id" element={<Banner />}/>
        <Route path="tv/original/:id" element={<Banner />}/>
        <Route path="tv/toprated/:id" element={<Banner />}/>
        <Route path="tv/action/:id" element={<Banner />}/>
        <Route path="tv/comedian/:id" element={<Banner />}/>
        <Route path="tv/horror/:id" element={<Banner />}/>
        <Route path="tv/romance/:id" element={<Banner />}/>
        <Route path="tv/document/:id" element={<Banner />}/>

        <Route path="movie/trending/:id" element={<Banner />}/>
        <Route path="movie/original/:id" element={<Banner />}/>
        <Route path="movie/toprated/:id" element={<Banner />}/>
        <Route path="movie/action/:id" element={<Banner />}/>
        <Route path="movie/comedian/:id" element={<Banner />}/>
        <Route path="movie/horror/:id" element={<Banner />}/>
        <Route path="movie/romance/:id" element={<Banner />}/>
        <Route path="movie/document/:id" element={<Banner />}/>
        <Route path="/:id" element={<Banner />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}