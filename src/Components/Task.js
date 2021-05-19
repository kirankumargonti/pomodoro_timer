import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {RiPencilFill} from 'react-icons/ri'
import {VscTrash} from 'react-icons/vsc'

const Task = ({task, editTaskIdHandler, removeTaskHandler}) => {
  const markAsCompleted = () => {
    const check__btn = document.querySelector('.check__icon')
    const taskMessage = document.querySelector('.text')
    check__btn?.classList.toggle('checkVisible')
    taskMessage?.classList.toggle('textVisible')
  }
  return (
    <div className='single__task'>
      <div className='single__task__left'>
        <FaCheckCircle className='check__icon' onClick={markAsCompleted} />
        <p className='text'>{task?.message}</p>
      </div>
      <div className='single__task__right'>
        <RiPencilFill
          className='edit__icon'
          onClick={() => editTaskIdHandler(task?.id)}
        />
        <VscTrash
          className='delete__icon'
          onClick={() => removeTaskHandler(task?.id)}
        />
      </div>
    </div>
  )
}

export default Task
