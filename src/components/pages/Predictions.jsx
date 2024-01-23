import React from 'react';
import OrangeLine from '../OrangeLine.svg';


const Predictions = () => {

  return (
    <div className='page-content' style={{ textAlign: 'center' }}>
      <h1 className="Main Heading">
      Predict the future results of a game with great accuracy using our advanced 
      algorithms and machine learning technology
      </h1> 
      <img className= 'line 'src={OrangeLine} alt="Orange Line" />
    </div>
  )
}

export default Predictions
