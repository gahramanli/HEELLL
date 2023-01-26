import React from 'react'
import './FourthPage.scss'
import image124 from './images/mypage.png'
import {Helmet} from 'react-helmet'

function FourthPage() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Fourth Page</title>      
    </Helmet>
    <div className='pageeee'>
        <div className='head'>
        Our Services
        </div>
        <div className='body'>
            <div className='myCard'>
                <img src={image124} alt="img"></img>
                <h1>Online Courses</h1>
                <h2>In aliquam, augue a gravida rutrum, ante nisl fermentum<br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi<br /> malesuada, finibus tortor fermentum.</h2>
            </div>
            <div className='myCard'>
                <img src={image124} alt="img"></img>
                <h1>Online Courses</h1>
                <h2>In aliquam, augue a gravida rutrum, ante nisl fermentum<br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi<br /> malesuada, finibus tortor fermentum.</h2>
            </div>
            <div className='myCard'>
                <img src={image124} alt="img"></img>
                <h1>Online Courses</h1>
                <h2>In aliquam, augue a gravida rutrum, ante nisl fermentum<br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi<br /> malesuada, finibus tortor fermentum.</h2>
            </div>
        </div>
        <div className='body'>
            <div className='myCard'>
                <img src={image124} alt="img"></img>
                <h1>Online Courses</h1>
                <h2>In aliquam, augue a gravida rutrum, ante nisl fermentum<br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi<br /> malesuada, finibus tortor fermentum.</h2>
            </div>
            <div className='myCard'>
                <img src={image124} alt="img"></img>
                <h1>Online Courses</h1>
                <h2>In aliquam, augue a gravida rutrum, ante nisl fermentum<br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi<br /> malesuada, finibus tortor fermentum.</h2>
            </div>
            <div className='myCard'>
                <img src={image124} alt="img"></img>
                <h1>Online Courses</h1>
                <h2>In aliquam, augue a gravida rutrum, ante nisl fermentum<br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi<br /> malesuada, finibus tortor fermentum.</h2>
            </div>
        </div>

    </div>
    </>
  )
}

export default FourthPage