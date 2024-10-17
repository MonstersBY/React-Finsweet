import React from 'react';
import './HomeStarted.scss'
import HomeImg from './img/homeStarted.png'
import { Link } from 'react-router-dom';

function HomeStarted() {
    return (
      <>
        <section className='homeStarted'>
            <div className="container">
                <div className='homeStarted__back'>
                    <img src={HomeImg} alt="Home Img" />
                </div>
                <div className='homeStarted__container'>
                    <div  className='homeStarted__box'>
                        <div className='homeStarted__subtitle'>Why we started </div>
                        <h1 className='homeStarted__title'>It started out as a simple idea and evolved into our passion</h1>
                        <div className='body01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
                        <a className='btn btn__yellow' href="">Discover our story {'>'}</a>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}
  
export default HomeStarted;