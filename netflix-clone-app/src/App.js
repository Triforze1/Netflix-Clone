import React from 'react';
import './css/App.css';
import Row from './components/Row';


function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS"/>
      <Row title="Trending Now"/>
      <Row title="Top Rated"/>
      <Row title="Action"/>
      <Row title="Comedy"/>
      <Row title="Horror"/>
      <Row title="Romance"/>
      <Row title="Documentaries"/>
    </div>
  );
}

export default App;
