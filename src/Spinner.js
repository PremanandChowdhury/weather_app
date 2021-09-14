import React from 'react'

const Spinner = ({ message }) => {
  return (
    <div className='spinner-wrapper'>
      <div className='loader'></div>
      <span className='message'>{message}</span>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading....',
}

export default Spinner
