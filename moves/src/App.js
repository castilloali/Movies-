
import NavBar from './components/NavBar';
import MovieListe from './components/MovieListe';
// import Pagnationcom from './components/Pagnationcom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"
import { useEffect, useState } from 'react';


function App() {

  const [movis, setMovies] = useState([])
  const handilApi = async () => {
    const axi = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7bd176819684edf54eff123f28edf523&page=2')
    setMovies(axi.data.results)
  }

  const getpages = async (page) => {
    const axi = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7bd176819684edf54eff123f28edf523&page=${page}`)
    setMovies(axi.data.results)
  }

  useEffect(() => {
    handilApi()
  }, [])
  console.log(movis)

const search = async (word) => {
  if (word === "") {
    handilApi()
  }else {
    const axi = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7bd176819684edf54eff123f28edf523&query=${word}`)
    setMovies(axi.data.results)
  }
}


  // https://api.themoviedb.org/3/search?api_key=7bd176819684edf54eff123f28edf523&query=venom
  return (
    <div className="App">
        <NavBar search={search}/>
        <MovieListe movis={movis} getpages={getpages}/>
        {/* <Pagnationcom/> */}
    </div>
  );
}

export default App;
