import './App.scss';
import './Header.scss';
import './Footer.scss';
import CompanyLogo from './img/Logo.svg'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Homepage from './pages/home/Homepage'
import About from './pages/About'
import Posts from './pages/Posts'
import Notfoundpage from './pages/Notfoundpage'

import { ReactComponent as IconFace } from './img/icon-facebook.svg';
import { ReactComponent as IconX } from './img/icon-twitter.svg';
import { ReactComponent as IconInst } from './img/icon-instagram.svg';
import { ReactComponent as IconLink } from './img/icon-linked.svg';

function App() {

  return (
    <div className="App">
      <header className="header">
        <div className='header__logo'>
          <Link to='/'><img src={CompanyLogo} alt="Company Logo" /></Link>
        </div>
        <div className='header__nav'>
          <Link className='body01' to='/'>Home</Link>
          <Link className='body01' to='/posts'>Blog</Link>
          <Link className='body01' to='/about'>About Us</Link>
          <Link className='body01' to='/about'>Contact us</Link>
          <button className='btn header__subscribe'>Subscribe</button>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/*' element={<Notfoundpage />}/>
      </Routes>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-top'>
            <div className='footer-top__logo'>
              <Link to='/'><img src={CompanyLogo} alt="Company Logo" /></Link>
            </div>
            <div className='footer-top__nav'>
              <Link className='body01' to='/'>Home</Link>
              <Link className='body01' to='/posts'>Blog</Link>
              <Link className='body01' to='/about'>About Us</Link>
              <Link className='body01' to='/about'>Contact us</Link>
              <Link className='body01' to='/404'>Privacy Policy</Link>
            </div>
          </div>
          <div className='footer-box'>
            <h2>Subscribe to our news letter to get latest updates and news</h2>
            <form className='footer-box__form'>
              <input className='body01' type="email" placeholder='Enter Your Email'/>
              <input className='btn btn__yellow' type="submit" value="Subscribe" />
            </form>
          </div>
          <div className='footer-bottom'>
            <div className='footer-bottom__text body01'>
              <span>Finstreet 118 2561 Fintown</span>
              <span>Hello@finsweet.com  020 7993 2905</span>
            </div>
            <div className='footer-bottom__social'>
              <a href=""><IconFace/></a>
              <a href=""><IconX/></a>
              <a href=""><IconInst/></a>
              <a href=""><IconLink/></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
