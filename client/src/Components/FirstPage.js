import React from 'react'
import './FirstPage.scss'
import image123 from './images/books.png';
import {Helmet} from 'react-helmet';

function FirstPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>First Page</title>      
      </Helmet>
      <div className='ourpage'>
        <div className='center'>
          <h2>Get your</h2>
          <h3> Education </h3>
          <h4>today!</h4>
        </div>
        <div className='cards'>
          <div className='card'>
            <img src={image123} alt='imaage'></img>
            <div className='words'>
              <h5>Online Courses</h5>
              <h6>VIEW MORE</h6>
            </div>
          </div>
          <div className='card'>
            <img src={image123} alt='imaage'></img>
            <div className='words'>
              <h5>Online Courses</h5>
              <h6>VIEW MORE</h6>
            </div>
          </div>
          <div className='card'>
            <img src={image123} alt='imaage'></img>
            <div className='words'>
              <h5>Online Courses</h5>
              <h6>VIEW MORE</h6>
            </div>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default FirstPage