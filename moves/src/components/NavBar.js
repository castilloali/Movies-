import React from 'react'
import {  Container } from 'react-bootstrap'

const NavBar = ({search}) => {
  const onSearch = (word) => {
    search(word)
  }
  return (
    <div className='navbar py-4'>
    <Container>

                <div className='d-flex justify-content-between ' >
                    <h2 className='logo'>Mo<span className='special-v'>V</span>es</h2>
                    
                    
                    <input type="text" onChange={(e) => onSearch(e.target.value) }  placeholder="search for your movie..." name="text" className="input"/>
                    <ul className='category'>
                      <li>vvd</li>
                      <li>fewf</li>
                      <li>vvdweffew</li>
                    </ul>
                </div>

    </Container>
        

    </div>
  )
}

export default NavBar
