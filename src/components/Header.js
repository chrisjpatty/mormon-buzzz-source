import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-static'
// import logoSrc from '../img/mb_logo.svg'

const Wrapper = styled('header')({
  background: '#000000',
  padding: 10,
  minHeight: 60,
  marginBottom: 20,
  color: '#ffffff',
  // overflow: 'hidden',
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

const Branding = styled('div')({
  // width: '30vw',
  // minWidth: '200px',
  position: 'absolute',
  left: 30,
  top: 20,
  background: '#000000',
  padding: '1vw',
  paddingBottom: '0vw',
  paddingLeft: '1.5vw',
  paddingRight: '2.5vw',
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: 800,
  fontSize: '6.5vw',
  lineHeight: .75
})
//
// const Logo = styled('img')({
//   width: '100%'
// })

export default class Header extends React.Component{
  render(){
    return(
      <Wrapper>
        <Branding>
          THE HIVE
        </Branding>
        <nav>

        </nav>
      </Wrapper>
    )
  }
}
