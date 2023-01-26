import React from 'react'
import './FifthPage.scss'
import myImage from './images/event_1.jpg';
import {Helmet} from 'react-helmet';


function FifthPage() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Fifth Page</title>      
    </Helmet>
    <div className='myy'>
        <div className='span'></div>
        <div className='ourHead'>
        Upcoming Events
        </div>
        <div className='ourBody'>
            <div className='card1'>
                <h4>07</h4>
                <h5>January</h5>

            </div>
            <div className='card2'>
                <h1>Student Festival</h1>
                <h2>Grand Central Park</h2>
                <h3>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula<br /> vel nunc. Proin quis mi malesuada, finibus tortor</h3>
            </div>
            <img src={myImage} alt="my"></img>
        </div>
        <div className='ourBody'>
            <div className='card1'>
                <h4>07</h4>
                <h5>January</h5>

            </div>
            <div className='card2'>
                <h1>Student Festival</h1>
                <h2>Grand Central Park</h2>
                <h3>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula<br /> vel nunc. Proin quis mi malesuada, finibus tortor</h3>
            </div>
            <img src={myImage} alt="my"></img>
        </div>
        <div className='ourBody'>
            <div className='card1'>
                <h4>07</h4>
                <h5>January</h5>

            </div>
            <div className='card2'>
                <h1>Student Festival</h1>
                <h2>Grand Central Park</h2>
                <h3>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula<br /> vel nunc. Proin quis mi malesuada, finibus tortor</h3>
            </div>
            <img src={myImage} alt="my"></img>
        </div>
    </div>
    </>
  )
}

export default FifthPage