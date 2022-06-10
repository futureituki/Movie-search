import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "../App";
import { Row } from "../component/OriginalMovie";
import { requests } from "../api/request";

export const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/original" element={<Row title={"NETFLIX ORIGUINALS"} fetchUrl={requests.feachNetflixOriginals}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}