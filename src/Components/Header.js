import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
const Header = () => {
  return (
    <div className='app__header'>
      <AiOutlineClockCircle className='clock__icon' />
      <h2>Pomodoro Timer</h2>
    </div>
  )
}

export default Header
