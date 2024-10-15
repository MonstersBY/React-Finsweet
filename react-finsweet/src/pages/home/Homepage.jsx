import React from 'react';
import HomepageBaner from './content/HomepageBaner'
import FeaturedPost from './content/FeaturedPost'
import HomeAbout from './content/HomeAbout'
import HomeCatagory from './content/HomeCatagory'

function Homepage() {
    return (
      <>
        <HomepageBaner/>
        <FeaturedPost/>
        <HomeAbout/>
        <HomeCatagory/>
      </>
    );
}
  
export default Homepage;