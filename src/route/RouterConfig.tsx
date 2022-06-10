import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "../App";
import { Row } from "../component/Movie";
import { requests } from "../api/request";

export const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/trending" element={<Row title={"NETFLIX TRENDING"} fetchUrl={requests.feachTrending}/>}/>
        <Route path="/original" element={<Row title={"NETFLIX ORIGUINALS"} fetchUrl={requests.feachNetflixOriginals}/>}/>
        <Route path="/action" element={<Row title={"NETFLIX ACTION"} fetchUrl={requests.feactActionMovies}/>}/>
        <Route path="/toprated" element={<Row title={"NETFLIX TOPRATED"} fetchUrl={requests.feactTopRated}/>}/>
        <Route path="/comedian" element={<Row title={"NETFLIX COMEDY"} fetchUrl={requests.feactComedyMovies}/>}/>
        <Route path="/horror" element={<Row title={"NETFLIX HORROR"} fetchUrl={requests.feactHorrorMovies}/>}/>
        <Route path="/romance" element={<Row title={"NETFLIX ROMANCE"} fetchUrl={requests.feactRomanceMovies}/>}/>
        <Route path="/document" element={<Row title={"NETFLIX DOCUMENT"} fetchUrl={requests.feactDocumentMovies}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}