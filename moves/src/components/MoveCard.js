import React from 'react'
import { Col } from 'react-bootstrap'

const MoveCard = ({mov}) => {
  return (
        <Col col="4" sm="4" md="3" lg="2">
            <div className='card'>
                <img src={`https://image.tmdb.org/t/p/w500//`+ mov.backdrop_path} alt=''/>
                <div className='title'>
                    <p>{mov.original_title}</p>
                    <p>{mov.release_date}</p>
                    <p>{mov.vote_average}</p>
                </div>
            </div>
        </Col>
  )
}

export default MoveCard
