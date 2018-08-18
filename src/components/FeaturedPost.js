import React from 'react'
import styled from 'react-emotion'

export default class FeaturedPost extends React.Component{
  render(){
    const { post } = this.props;
    console.log(post);
    return(
      <PostImageContainer style={{
        backgroundImage: `url(${post})`
      }} />
    )
  }
}

const PostImageContainer = styled('div')({

})
