import React , {useState, useEffect } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const MovieDetalies = () => {

  const prams = useParams();

  // get movie Detaills
  const [movie, setMovie] = useState([])

  const getMovieDetaills = async () => {
    const axi = await axios.get(`https://api.themoviedb.org/3/movie/${prams.id}?api_key=7bd176819684edf54eff123f28edf523`)
    setMovie(axi.data)

}

  useEffect(() => {
    getMovieDetaills()
  }, [])


  // 
  return (
    <Container className='containermoviedatilescard'>
        <div className='moviedatilescard'>
            <Container>
                <Row className='flex-row-reverse'>
                    <Col xs={12} sm={6} md={5} lg={4}>
                    <div className='hold-img'> <img className='' src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}  alt=''/> </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={7} className='  '>
                      <div className='text-xs-start font-monospace p-3 w-100'>
                        <h2>Name: {movie.original_title}</h2>
                        <h2>Date: {movie.release_date}</h2>
                        <h2>Vote: {movie.vote_count}</h2>
                      </div>


                    </Col>
                </Row>
            </Container>

        </div>
    </Container>
        
  )
}

export default MovieDetalies

// https://api.themoviedb.org/3/movie/640146?api_key=7bd176819684edf54eff123f28edf523