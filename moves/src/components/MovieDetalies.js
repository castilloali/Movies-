import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'

const MovieDetalies = ({movis}) => {
  return (
    <Container className='containermoviedatilescard'>
        <div className='moviedatilescard'>
            <Container>
                <Row>
                    <Col>
                    <h1>{movis.original_title}</h1>
                    <h1>feef</h1>
                    </Col>
                </Row>
            </Container>

        </div>
    </Container>
        
  )
}

export default MovieDetalies
