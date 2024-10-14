import './App.scss';
import './Header.scss';
import CompanyLogo from './img/Logo.svg'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Homepage from './pages/home/Homepage'
import About from './pages/About'
import Posts from './pages/Posts'
import Notfoundpage from './pages/Notfoundpage'

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
    </div>
  );
}

export default App;
