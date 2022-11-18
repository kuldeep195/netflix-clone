import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Banner url="https://api.themoviedb.org/3/discover/movie?api_key=af610aa270a31c57fc9857b7e0d5245f&with_genres=28" />
     <Nav/>
      <Row 
      title="NETFLIX ORIGNALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy  Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMoves}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );  
}

export default App;
