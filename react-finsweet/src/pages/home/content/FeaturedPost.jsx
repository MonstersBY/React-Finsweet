import React from 'react';
import './FeaturedPost.scss'
import featuredPostImg from './img/featuredPost.png'
import { Link } from 'react-router-dom';

function FeaturedPost() {
    return (
      <>
        <section className='featuredPost'>
            <div className='container'>
                <div className='featuredPost-left'>
                    <h2>Featured Post</h2>
                    <div className='featuredPost-main'>
                        <div className='featuredPost-main__img'>
                        <img src={featuredPostImg} alt="Post" />
                        </div>
                        <div className='featuredPost-main__inf label'>By <Link className='link' to='/404'>John Doe</Link>    l   May 23, 2022</div>
                        <h3 className='featuredPost-main__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                        <div className='body01 featuredPost-main__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br /> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                        <Link className='btn btn__yellow' to='/posts'>Read More {'>'}</Link>
                    </div>
                </div>
                <div className='featuredPost-right'>
                    <div className='featuredPost-right__header'>
                        <h2>All Posts</h2>
                        <Link className='link body01' to='/posts'>View All</Link>
                    </div>
                    <div className='featuredPost__list'>
                        <Link className='featuredPost-item'>
                            <div className='label featuredPost-item__inf'> By <span className='link'>John Doe</span>   l   Aug 23, 2021 </div>
                            <h4>8 Figma design systems that you can download for free today.</h4>
                        </Link>
                        <Link className='featuredPost-item'>
                            <div className='label featuredPost-item__inf'> By <span className='link'>John Doe</span>   l   Aug 23, 2021 </div>
                            <h4>8 Figma design systems that you can download for free today.</h4>
                        </Link>
                        <Link className='featuredPost-item'>
                            <div className='label featuredPost-item__inf'> By <span className='link'>John Doe</span>   l   Aug 23, 2021 </div>
                            <h4>8 Figma design systems that you can download for free today.</h4>
                        </Link>
                        <Link className='featuredPost-item'>
                            <div className='label featuredPost-item__inf'> By <span className='link'>John Doe</span>   l   Aug 23, 2021 </div>
                            <h4>8 Figma design systems that you can download for free today.</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}
  
export default FeaturedPost;