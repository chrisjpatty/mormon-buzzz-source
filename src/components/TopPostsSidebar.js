import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-static'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '20vw'
})

const Header = styled('h2')({
  fontWeight: 600,
  margin: 0
}, ({theme}) => ({
  fontFamily: theme.fonts.header
}))

const PostWrapper = styled('div')({
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 0px',
    borderBottom: '1px solid rgb(219, 219, 219)',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: 'rgb(172, 172, 172)'
    }
  },
  '&:last-child a': {
    border: 'none'
  }
}, ({theme}) => ({
  fontFamily: theme.fonts.header
}))

const Title = styled('span')({
  // fontWeight: 600,
  fontSize: '.95rem'
})

const StyledDate = styled('span')({
  fontStyle: 'italic',
  fontSize: '.85rem'
})

export default class TopPostsSidebar extends React.Component{
  render(){
    const { posts } = this.props;
    return(
      <Wrapper>
        <Header>Popular Articles</Header>
        {
          posts.map(({title, link, slug, formattedDate}, i) => (
            <Post title={title} link={`/${slug}`} date={formattedDate} key={i}/>
          ))
        }
      </Wrapper>
    )
  }
}

const Post = ({title, link, date}) => (
  <PostWrapper>
    <Link to={link}>
      <Title>{title}</Title>
      <StyledDate>{date}</StyledDate>
    </Link>
  </PostWrapper>
)
