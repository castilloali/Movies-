
import NavBar from './components/NavBar';
import MovieListe from './components/MovieListe';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"
import { useEffect, useState } from 'react';


function App() {

  const [movis, setMovies] = useState([])
  const handilApi = async () => {
    const axi = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7bd176819684edf54eff123f28edf523')
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
        <MovieListe movis={movis}/>
    </div>
  );
}

export default App;
