import React from 'react';
import './HomeAbout.scss'
import { Link } from 'react-router-dom';

function HomeAbout() {
    return (
      <>
        <section className='homeAbout'>
            <div className="container">
                <div className="homeAbout-pattern">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="homeAbout-container">
                    <div className='homeAbout-item'>
                        <div className='homeAbout-item__subtitle'>ABOUT US</div>
                        <h2>We are a community of content writers who share their learnings</h2>
                        <div className='body01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <Link className='link' to='/404'>Read More {'>'}</Link>
                    </div>
                    <div className='homeAbout-item'>
                        <div className='homeAbout-item__subtitle'>Our mision</div>
                        <h3>Creating valuable content for creatives all around the world</h3>
                        <div className='body01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}
  
export default HomeAbout;