import React from 'react'
import './Footer.scss';
import pinterest from './images/iii.jpg';
function Footer() {
  return (
    <>
        <div className='pageFooter'>
            <div className='ourFooter'>
                <div className='l1ft'>
                Copyright ©2023 All rights reserved | This template is made with by Colorlib
                </div>
                <div className='r1ght'>
                    <img src={pinterest} alt="img"></img>
                    <img src={pinterest} alt="img"></img>
                    <img src={pinterest} alt="img"></img>
                    <img src={pinterest} alt="img"></img>
                    <img src={pinterest} alt="img"></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer