import React from 'react';
import './HomepageBaner.scss'
import BanerImg from './img/banerBG.png'
import { Link } from 'react-router-dom';

function HomepageBaner() {
    return (
      <>
        <section className='baner'>
            <div className='baner__background'>
                <img src={BanerImg} alt="Baner Img" />
            </div>
            <div className='container'>
                <div className='baner__container'>
                    <div className='baner__post'>Posted on <strong>startup</strong></div>
                    <div className='display baner__display'>Step-by-step guide to choosing great font pairs</div>
                    <div className='body01 baner__info'>By <Link to='/posts'>James West</Link> James West  |  May 23, 2022 </div>
                    <div className='body01 baner__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                    <Link className='btn btn__yellow baner__btn' to='/posts'>Read More {'>'}</Link>
                </div>
            </div>
        </section>
      </>
    );
}
  
export default HomepageBaner;