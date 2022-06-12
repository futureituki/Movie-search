import './App.css';
import React, { VFC,memo,useState, useEffect } from 'react';
import { Header } from './component/Header';
import { Row } from './component/Movie';
import { Search } from './component/Search';

export const App:React.VFC = memo(() => {
  return (
    <>
    <Header/>
    <Search/>
    {/* <Row title={"TOP MOVIE"} fetchUrl={requests.feachNetflixOriginals}/> */}
    </>
  );
})

