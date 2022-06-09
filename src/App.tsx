import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './component/Row';
import { requests } from './api/request';

function App() {
  return (
    <div className="App">
      <Row title={"NETFLIX ORIGUINALS"} fetchUrl={requests.feachTrending} isLargeRow={true}/>
    </div>
  );
}

export default App;
