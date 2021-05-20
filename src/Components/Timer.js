import React, {useRef, useState} from 'react'
import Countdown from 'react-countdown'
import {AiOutlineReload} from 'react-icons/ai'
import {v4 as uuid} from 'uuid'

const Timer = () => {
  const Completionist = () => <h1>You are good to go! 👏</h1>
  const [isCompleted, setIsCompleted] = useState(false)
  const [timeInMillieSeconds, setTimeInMillieSeconds] = useState(1500000)

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

  const clockRef = useRef()

  const handleStart = () => {
    clockRef.current.start()
    setPaused(false)
    setIsStarted(true)
  }
  // const handlePause = () => {
  //   clockRef.current.pause()
  // }
  const handleStop = () => {
    clockRef.current.stop()
    setIsStarted(false)
    setPaused(false)
  }

  const times = [
    {
      id: uuid(),
      name: 'Pomodoro',
      time: 1500000,
      backgroundColor: '#437ea8',
    },
    {
      id: uuid(),
      name: 'Short Break',
      time: 300000,
      backgroundColor: '#468e91',
    },
    {
      id: uuid(),
      name: 'Long Break',
      time: 900000,
      backgroundColor: '#db7a4d',
    },
  ]

  const setTimeHandler = (time, backgroundColor) => {
    handleStop()
    const y = document.getElementsByTagName('body')
    y[0].style.backgroundColor = `${backgroundColor}`

    const allSections = document.querySelectorAll('.time__section')
    setTimeInMillieSeconds(time)
    // allSections.forEach((item) => {
    //   item.classList.remove('active__section')
    // })
    // allSections[index].classList.add('active__section')
  }

  return (
    <div className='timer'>
      <div className='timer__container'>
        <div className='timer__container__header'>
          {times?.map((t, index) => (
            <p
              className='time__section'
              onClick={() => setTimeHandler(t?.time, t?.backgroundColor)}
              key={t?.id}
            >
              {t?.name}
            </p>
          ))}
        </div>
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
