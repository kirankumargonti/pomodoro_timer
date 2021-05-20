import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {RiPencilFill} from 'react-icons/ri'
import {VscTrash} from 'react-icons/vsc'

const Task = ({
  task,
  editTaskIdHandler,
  removeTaskHandler,
  markAsCompleted,
}) => {

  return (
    <div className='single__task'>
      <div className='single__task__left'>
        <FaCheckCircle
          className={
            task?.isCompleted ? 'check__icon checkVisible' : 'check__icon'
          }
          onClick={() => markAsCompleted(task?.id, task?.isCompleted)}
        />
        <p className={task?.isCompleted ? 'text textVisible' : 'text'}>
          {task?.message}
        </p>
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
