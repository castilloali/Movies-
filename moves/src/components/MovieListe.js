import React from 'react'
import MoveCard from './MoveCard';
import {  Container, Row } from 'react-bootstrap';

const MovieListe = () => {
  return (
    <div>
        <Container fluid className='container-card'>
            <Row>
                <MoveCard/>
                <MoveCard/>
                <MoveCard/>
            </Row>    
    </Container>
    </div>
  )
}

export default MovieListe;
