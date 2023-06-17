import React from 'react'
import MoveCard from './MoveCard';
import Pagnationcom from './Pagnationcom';
import {  Container, Row } from 'react-bootstrap';

const MovieListe = ({movis, getpages, pageCont }) => {
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
                        {
                                movis.length >= 1? <Pagnationcom getpages={getpages} pageCont={pageCont}/> : ''
                        }
        </Container>
        </div>
        )
        }
export default MovieListe;
