import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-static'

const Wrapper = styled('header')({
  background: '#000000',
  padding: 10,
  marginBottom: 20,
  color: '#ffffff',
  overflow: 'hidden',
  position: 'relative',
  '&:before, &:after': {
    content: '" "',
    width: '1.9vw',
    height: 'calc(100% + 20px)',
    position: 'absolute',
    right: '1.9vw',
    top: -10,
    transform: 'rotate(15deg)',
    background: '#fff'
  },
  '&:after': {
    right: '6vw'
  }
})

export default class Header extends React.Component{
  render(){
    return(
      <Wrapper>
        <nav>

        </nav>
      </Wrapper>
    )
  }
}
