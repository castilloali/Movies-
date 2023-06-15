import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const MovieDetalies = ({movis}) => {
  const prams = useParams();
  console.log(prams.id);
  return (
    <Container className='containermoviedatilescard'>
        <div className='moviedatilescard'>
            <Container>
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4}>
                    <div> <img /> </div>
                    </Col>
                    <Col>
                    <h2>الاسم</h2>
                    <h2>date</h2>
                    <h2>rate</h2>
                    <h2>FVF</h2>

                    </Col>
                </Row>
            </Container>

        </div>
    </Container>
        
  )
}

export default MovieDetalies
