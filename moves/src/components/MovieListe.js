import React from 'react'
import MoveCard from './MoveCard';
import {  Container, Row } from 'react-bootstrap';

const MovieListe = ({movis}) => {
  return (
    <div>
        <Container fluid className='container-card'>
            <Row>
            {
                movis.length >= 1 ? ( movis.map((mov) => {
                    return (<MoveCard key={mov.id} mov={mov}/>)
            })) : <h2>none</h2>

                // )
                // ): <h2>none</h2>
                
            }
            </Row>    
    </Container>
    </div>
  )
        }
export default MovieListe;
