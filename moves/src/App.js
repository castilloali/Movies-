
import NavBar from './components/NavBar';
import MovieListe from './components/MovieListe';
import MovieDetalies from './components/MovieDetalies';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"

import axios from 'axios';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';


function App() {

  const [movis, setMovies] = useState([])
  const [pageCont, setPageCont] = useState(0)
  const handilApi = async () => {
    const axi = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7bd176819684edf54eff123f28edf523')
    setMovies(axi.data.results)
    setPageCont(axi.data.total_pages)
  }
  const getpages = async (page) => {
    const axi = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7bd176819684edf54eff123f28edf523&page=${page}`)
    setMovies(axi.data.results)
    setPageCont(axi.data.total_pages)
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
    setPageCont(axi.data.total_pages)
  }
}
  return (
    <div className="App">
        <NavBar search={search}/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieListe movis={movis} getpages={getpages} pageCont={pageCont}/>} />
          <Route path='/movie/:id' element={<MovieDetalies movis={movis}/>}  />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
