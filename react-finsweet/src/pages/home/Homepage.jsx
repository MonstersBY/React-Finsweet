import React from 'react';
import HomepageBaner from './content/HomepageBaner'
import FeaturedPost from './content/FeaturedPost'
import HomeAbout from './content/HomeAbout'
import HomeCatagory from './content/HomeCatagory'
import HomeStarted from './content/HomeStarted'
import HomeAuthors from './content/HomeAuthors'

function Homepage() {
    return (
      <>
        <HomepageBaner/>
        <FeaturedPost/>
        <HomeAbout/>
        <HomeCatagory/>
        <HomeStarted/>
        <HomeAuthors/>
      </>
    );
}
  
export default Homepage;