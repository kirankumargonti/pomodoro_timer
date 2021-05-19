import React, {useRef, useState} from 'react'
import Countdown from 'react-countdown'

const Timer = () => {
  const Completionist = () => <span>You are good to go!</span>

  // Renderer callback with condition
  const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
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
  const [start, setStart] = useState(false)

  const clockRef = useRef()
  const handleStart = () => clockRef.current.start()
  const handlePause = () => clockRef.current.pause()
  const handleStop = () => clockRef.current.stop()

  return (
    <div className='timer'>
      <div className='timer__container'>
        <Countdown
          date={Date.now() + 1500000}
          renderer={renderer}
          autoStart={false}
          ref={clockRef}
        />

        <div className='timer__container__buttons'>
          <button
            onClick={
              !start
                ? () => handleStart() & setStart(true)
                : () => handlePause() & setStart(true)
            }
          >
            {start ? 'Pause' : 'Start'}
          </button>

          {start && (
            <button onClick={() => handleStop() & setStart(false)}>
              {start ? 'Stop' : null}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timer
