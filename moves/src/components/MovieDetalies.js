import React , {useState, useEffect } from 'react'
import { Container, Row , Col, Button } from 'react-bootstrap'
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
                      <div className='text-xs-start font-monospace p-3 w-100 text-center gap-5'>
                        <h2 className='border-bottom pt-3'>Name: {movie.original_title}</h2>
                        <h2 className='border-bottom pt-3'>Date: {movie.release_date}</h2>
                        <h2 className='border-bottom pt-3'>Vote: {movie.vote_count}</h2>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='moviedatilescard my-5'> 
        <Container>
          <Row className='flex-row-reverse'>
            <h2 className='p-3 ps-5'>Story :</h2>
            <p className='ps-5'>{movie.overview}</p>
          </Row>
        </Container>
        <div className='text-center'>
          <a href='/'> <Button className='mx-2'>Back</Button> </a>
          <Button className='mx-2'>Wach Movie</Button>
        </div>
        </div>

    </Container>
        
  )
}

export default MovieDetalies

// https://api.themoviedb.org/3/movie/640146?api_key=7bd176819684edf54eff123f28edf523