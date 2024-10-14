import React from 'react';
import HomepageBaner from './content/HomepageBaner'
import FeaturedPost from './content/FeaturedPost'
import HomeAbout from './content/HomeAbout'

function Homepage() {
    return (
      <>
        <HomepageBaner/>
        <FeaturedPost/>
        <HomeAbout/>
      </>
    );
}
  
export default Homepage;