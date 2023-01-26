import React from 'react'
import './Navbar.scss';
import imageb4 from './images/logo.png';
import imagee12 from './images/iamgee12.jpg';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>

    <div className='navbar'>
        <div className='logo'>
            <img src={imageb4} alt="img"></img>
            <h1>COURSE</h1>
        </div>
        <div className='list'>
            <ul>
                <li><Link className='linkk' to='/'>HOME</Link></li>
                <li><Link className='linkk' to='/add'>ADD</Link></li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className='phone'>
            <img src={imagee12} alt='imgg'></img>
            <h2>+43 4566 7788 2457</h2>
        </div>
    
    </div>
    </>
  )
}

export default Navbar