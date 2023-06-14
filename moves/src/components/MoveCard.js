import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MoveCard = ({mov}) => {
  return (
        <Col col="4" sm="4" md="3" lg="2">
            <Link to={`/movie/${mov.id}`}>
                <div className='card'>
                    <img src={`https://image.tmdb.org/t/p/w500//`+ mov.backdrop_path} alt=''/>
                    <div className='title'>
                        <p>{mov.original_title}</p>
                        <p>{mov.release_date}</p>
                        <p>{mov.vote_average}</p>
                    </div>
                </div>
            </Link>
        </Col>
  )
}

export default MoveCard
