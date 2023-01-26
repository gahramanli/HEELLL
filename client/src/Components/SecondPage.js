import React from 'react'
import './Secondpage.scss';
import ima from './images/course_1.jpg';
import ooo from './images/author.jpg';
import {Helmet} from 'react-helmet'

function SecondPage() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-9" />
        <title>Second Page</title>      
    </Helmet>
    <div className='ourrr'>
        <div className='header'>
            <h6>Popular Courses</h6>

        </div>
        <div className='ourcards'>
            <div className='cardd'>
                <img className='oouu' src={ima} alt="ima"></img>
                <div className='texts'>
                    <h1>A complete guide to design</h1>
                    <h2>Adobe Guide, Layes, Smart Objects etc...</h2>
                </div>
                <div className='foot'>
                    <img src={ooo} alt='oa'></img>
                    <h3>Michael Smith,</h3>
                    <h4>Author</h4>
                    <div className='oool'>
                        <h5>29$</h5>
                    </div>
                </div>
            </div>
            <div className='cardd'>
                <img className='oouu' src={ima} alt="ima"></img>
                <div className='texts'>
                    <h1>A complete guide to design</h1>
                    <h2>Adobe Guide, Layes, Smart Objects etc...</h2>
                </div>
                <div className='foot'>
                    <img src={ooo} alt='oa'></img>
                    <h3>Michael Smith,</h3>
                    <h4>Author</h4>
                    <div className='oool'>
                        <h5>29$</h5>
                    </div>
                </div>
                
            </div>
            <div className='cardd'>
                <img className='oouu' src={ima} alt="ima"></img>
                <div className='texts'>
                    <h1>A complete guide to design</h1>
                    <h2>Adobe Guide, Layes, Smart Objects etc...</h2>
                </div>
                <div className='foot'>
                    <img src={ooo} alt='oa'></img>
                    <h3>Michael Smith,</h3>
                    <h4>Author</h4>
                    <div className='oool'>
                        <h5>29$</h5>
                    </div>
                </div>
                
            </div>

        </div>
        
    </div>
    </>
  )
}

export default SecondPage