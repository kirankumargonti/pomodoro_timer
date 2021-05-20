import React, {useRef, useState} from 'react'
import Countdown from 'react-countdown'
import {AiOutlineReload} from 'react-icons/ai'

const Timer = () => {
  const Completionist = () => <h1>You are good to go! 👏</h1>
  const [isCompleted, setIsCompleted] = useState(false)
  const [timeInMillieSeconds, setTimeInMillieSeconds] = useState(1500000)

  console.log(timeInMillieSeconds)
  // Renderer callback with condition
  const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      setIsCompleted(true)
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      )
    }
  }
  const [isStarted, setIsStarted] = useState(false)
  const [paused, setPaused] = useState(false)

  console.log(isStarted, paused)
  const clockRef = useRef()

  const handleStart = () => {
    clockRef.current.start()
    console.log('start')
    setPaused(false)
    setIsStarted(true)
  }
  // const handlePause = () => {
  //   clockRef.current.pause()
  // }
  const handleStop = () => {
    clockRef.current.stop()
    console.log('stop')
    setIsStarted(false)
    setPaused(false)
  }

  return (
    <div className='timer'>
      <div className='timer__container'>
        <Countdown
          date={Date.now() + timeInMillieSeconds}
          renderer={renderer}
          autoStart={false}
          ref={clockRef}
        />

        <div className='timer__container__buttons'>
          {!isCompleted ? (
            <button onClick={isStarted ? handleStop : handleStart}>
              {isStarted ? 'Stop' : 'Start'}
            </button>
          ) : (
            <button
              onClick={() =>
                setTimeInMillieSeconds(1500000) & setIsCompleted(false)
              }
            >
              <AiOutlineReload
                style={{
                  fontSize: '28px',
                }}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timer
