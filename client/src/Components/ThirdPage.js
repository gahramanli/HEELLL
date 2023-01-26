import React from 'react'
import './ThirdPage.scss'
import {Helmet} from 'react-helmet';

function ThirdPage() {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Third Page</title>      
        </Helmet>
        <div className='ourPage3'>
            <div className='left'>
                <h1>Register now and get a discount<br /> 50% discount until 1 January</h1>
                <h2>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor<br />  nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.<br />  Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</h2>
                <button className='btn'>REGISTER NOW</button>

            </div>
            <div className='right'>
                <h3>Search for your course</h3>
                <input className='inp' type="text" placeholder="Course Name"></input>
                <input className='inp' type="text" placeholder="Category"></input>
                <input className='inp' type="text" placeholder="Degree"></input>
                <button className='btn2'>SEARCH COURSE</button>


            </div>
        </div>
    </>
  )
}

export default ThirdPage