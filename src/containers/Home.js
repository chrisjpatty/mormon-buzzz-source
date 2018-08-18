import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import { compose } from 'recompose'
import styled from 'react-emotion'
import TopPostsSidebar from '../components/TopPostsSidebar'
import FeaturedPost from '../components/FeaturedPost'

const Wrapper = styled('main')({
  display: 'flex'
})

const RightSidebarWrapper = styled('aside')({
  marginLeft: 'auto',
  marginRight: '1rem'
})

const Main = styled('main')({

})

class Home extends React.Component{
  render(){
    const { posts, topPosts } = this.props;
    return(
      <Wrapper>
        <Main>
          <FeaturedPost post={posts[0]}/>
        </Main>
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
