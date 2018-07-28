import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import { compose } from 'recompose'
import styled from 'react-emotion'
import TopPostsSidebar from '../components/TopPostsSidebar'

const Wrapper = styled('main')({
  display: 'flex'
})

const RightSidebarWrapper = styled('aside')({
  marginLeft: 'auto',
  marginRight: '1rem'
})

class Home extends React.Component{
  render(){
    const { posts, topPosts } = this.props;
    return(
      <Wrapper>
        <RightSidebarWrapper>
          <TopPostsSidebar posts={topPosts} />
        </RightSidebarWrapper>
      </Wrapper>
    )
  }
}

export default compose(
  withSiteData,
  withRouteData
)(Home)
