import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import { compose } from 'recompose'
import styled from 'react-emotion'

const Wrapper = styled('main')({

})

class Home extends React.Component{
  render(){
    const { posts, topPosts, topPaths } = this.props;
    console.log(topPosts);
    return(
      <Wrapper>

      </Wrapper>
    )
  }
}

export default compose(
  withSiteData,
  withRouteData
)(Home)
