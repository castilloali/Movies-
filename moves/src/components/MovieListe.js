import React from 'react'
import MoveCard from './MoveCard';
import Pagnationcom from './Pagnationcom';
import {  Container, Row } from 'react-bootstrap';

const MovieListe = ({movis, getpages }) => {
        return (
        <div>
                <Container fluid className='container-card'>
                        <Row>
                                {
                                        movis.length >= 1 ? ( movis.map((mov) => {
                                        return (<MoveCard key={mov.id} mov={mov}/>)
                                })) : <h2>none</h2>
                                }
                        </Row>    
                <Pagnationcom getpages={getpages}/>
        </Container>
        </div>
        )
        }
export default MovieListe;
