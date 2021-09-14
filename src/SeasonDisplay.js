import React from 'react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth())
  const sun = '🌞'
  const snowflake = '❄️'
  const getIcon = () => {
    return season === 'Summer' ? sun : snowflake
  }
  const message =
    season === 'Summer' ? "Let's hit the beach" : 'Time for Hot Cup of coffee'

  return (
    <div className={`container ${season}`}>
      <div className='weather-wrapper'>
        <div className='icon'>{getIcon()}</div>
        <h1>{message}</h1>
        <div className='icon'>{getIcon()}</div>
      </div>
      <cite>
        <strong>In latitude:</strong> {lat}
      </cite>
    </div>
  )
}

export default SeasonDisplay
