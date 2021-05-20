import React from 'react'
import {GiClockwork} from 'react-icons/gi'
const Header = () => {
  return (
    <div className='app__header'>
      <GiClockwork className='clock__icon' />
      <h2>Pomodoro Timer</h2>
    </div>
  )
}

export default Header
