import React from 'react';
import './HomeCatagory.scss'
import { ReactComponent as IconBus } from '../../../img/icon-business.svg';
import { ReactComponent as IconStart } from '../../../img/icon-startup.svg';
import { ReactComponent as IconEconom } from '../../../img/icon-economy.svg';
import { ReactComponent as IconTech } from '../../../img/icon-tech.svg';
import { Link } from 'react-router-dom';

function HomeCatagory() {
    return (
      <>
        <section className='catagory'>
            <div className="container">
                <h2 className='catagory__title'>Choose A Catagory</h2>
                <div className='catagory__list'>
                    <div className='catagory-item'>
                        <div className='catagory-item__icon'>
                            <IconBus/>
                        </div>
                        <h3>Business</h3>
                        <div className='body01'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    </div>
                    <div className='catagory-item'>
                        <div className='catagory-item__icon'>
                            <IconStart/>
                        </div>
                        <h3>Startup</h3>
                        <div className='body01'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    </div>
                    <div className='catagory-item'>
                        <div className='catagory-item__icon'>
                            <IconEconom/>
                        </div>
                        <h3>Economy</h3>
                        <div className='body01'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    </div>
                    <div className='catagory-item'>
                        <div className='catagory-item__icon'>
                            <IconTech/>
                        </div>
                        <h3>Technology</h3>
                        <div className='body01'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}
  
export default HomeCatagory;