
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




  return (
    <div className="App">
        <NavBar/>
        <MovieListe movis={movis}/>
        {/* https://api.themoviedb.org/3/person/popular?api_key=7bd176819684edf54eff123f28edf523 
        "/hpMpnHprRlCzvNVlx6C3RWmswOF.jpg"
        
https://api.themoviedb.org/3/network/{/hpMpnHprRlCzvNVlx6C3RWmswOF.jpg}/images
https://api.themoviedb.org/3/movie/2710789/images?api_key=7bd176819684edf54eff123f28edf523


https://image.tmdb.org/t/p/w500//hpMpnHprRlCzvNVlx6C3RWmswOF.jpg
"/hpMpnHprRlCzvNVlx6C3RWmswOF.jpg"
        */}
    </div>
  );
}

export default App;
