import React from 'react'
import { Col } from 'react-bootstrap'

const MoveCard = ({mov}) => {
  return (
        <Col col="4" sm="4" md="3" lg="2">
            <div className='card'>
                <img src={mov.profile_path} alt=''/>
                <div className='title'>
                    <h2>{mov.name}</h2>
                    <p> gerergger  rgggegrre</p>
                </div>
            </div>
        </Col>
  )
}

export default MoveCard
