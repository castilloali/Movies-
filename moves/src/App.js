
import NavBar from './components/NavBar';
import MovieListe from './components/MovieListe';


import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"


function App() {
  return (
    <div className="App">
        <NavBar/>
        <MovieListe/>
    </div>
  );
}

export default App;
