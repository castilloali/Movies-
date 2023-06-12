import React from 'react'
import { Col } from 'react-bootstrap'

const MoveCard = ({mov}) => {
  return (
        <Col col="4" sm="4" md="3" lg="2">
            <div className='card'>
                <img src={`https://image.tmdb.org/t/p/w500//`+ mov.backdrop_path} alt=''/>
                <div className='title'>
                    <h2>{mov.original_title}</h2>
                    <p></p>
                </div>
            </div>
        </Col>
  )
}

export default MoveCard
