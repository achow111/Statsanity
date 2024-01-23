import React from 'react'
import OrangeLine from '../OrangeLine.svg';


const Stats = () => {
  
  return (
    <div>
      <h1 className="Main Heading">
      Statsanity is your reference for basketball stats,
      player profiles, team rosters, game scores 
      and league standings throughout the world.
      </h1> 
      <img className= 'line 'src={OrangeLine} alt="Orange Line" />
    </div>
  )
}

export default Stats
