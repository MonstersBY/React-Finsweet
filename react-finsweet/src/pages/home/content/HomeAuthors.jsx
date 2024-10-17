import React from 'react';
import './HomeAuthors.scss'

import { ReactComponent as IconFace } from '../../../img/icon-facebook.svg';
import { ReactComponent as IconX } from '../../../img/icon-twitter.svg';
import { ReactComponent as IconInst } from '../../../img/icon-instagram.svg';
import { ReactComponent as IconLink } from '../../../img/icon-linked.svg';


import Author1 from './img/authors01.png'
import Author2 from './img/authors02.png'
import Author3 from './img/authors03.png'
import Author4 from './img/authors04.png'

function Social() {
  return (
    <div className='homeAuthors-item__social'>
      <a href=""><IconFace/></a>
      <a href=""><IconX/></a>
      <a href=""><IconInst/></a>
      <a href=""><IconLink/></a>
    </div>
  );
}

function HomeAuthors() {
    return (
      <>
        <section className='homeAuthors'>
            <div className="container">
                <h2 className='homeAuthors__title'>List of Authors</h2>
                <div className='homeAuthors__list'>
                  <div className='homeAuthors-item'>
                    <div className='homeAuthors-item__photo'>
                      <img src={Author1} alt="Author" />
                    </div>
                    <h3 className='homeAuthors-item__name'>Floyd Miles</h3>
                    <div className='homeAuthors-item__subtitle body02'>Content Writer @Company</div>
                    <Social/>
                  </div>
                  <div className='homeAuthors-item'>
                    <div className='homeAuthors-item__photo'>
                      <img src={Author2} alt="Author" />
                    </div>
                    <h3 className='homeAuthors-item__name'>Dianne Russell</h3>
                    <div className='homeAuthors-item__subtitle body02'>Content Writer @Company</div>
                    <Social/>
                  </div>
                  <div className='homeAuthors-item'>
                    <div className='homeAuthors-item__photo'>
                      <img src={Author3} alt="Author" />
                    </div>
                    <h3 className='homeAuthors-item__name'>Jenny Wilson</h3>
                    <div className='homeAuthors-item__subtitle body02'>Content Writer @Company</div>
                    <Social/>
                  </div>
                  <div className='homeAuthors-item'>
                    <div className='homeAuthors-item__photo'>
                      <img src={Author4} alt="Author" />
                    </div>
                    <h3 className='homeAuthors-item__name'>Leslie Alexander</h3>
                    <div className='homeAuthors-item__subtitle body02'>Content Writer @Company</div>
                    <Social/>
                  </div>
                </div>
            </div>
        </section>
      </>
    );
}
  
export default HomeAuthors;