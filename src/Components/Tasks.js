import React, {useEffect, useState} from 'react'
import {BiPlus} from 'react-icons/bi'
import {FaPlusCircle} from 'react-icons/fa'
import Modal from './Modal'
import Task from './Task'

const Tasks = () => {
  const [totalTasks, setTotalTasks] = useState([])
  const [singleTask, setSingleTask] = useState('')

  const openModal = (info) => {
    document.querySelector('.modal').style.visibility = 'visible'
    if (info === true) {
      setSingleTask('')
    }
  }

  const closeModal = () => {
    document.querySelector('.modal').style.visibility = 'hidden'
  }

  //   Helpers
  const editTaskIdHandler = (id) => {
    openModal()
    const filteredTask = totalTasks?.filter((task) => task.id === id)
    setSingleTask(filteredTask)
  }
  const getAllTasksFromLocalStorage = () => {
    if (window?.localStorage?.getItem('TaskMessages')) {
      setTotalTasks(JSON.parse(window?.localStorage?.getItem('TaskMessages')))
    }
  }

  const setTasksInLocalStorage = (info) => {
    if (info && typeof localStorage !== 'undefined') {
      totalTasks.unshift(info)
      window?.localStorage?.setItem('TaskMessages', JSON.stringify(totalTasks))
      closeModal()
    }
  }

  useEffect(() => {
    getAllTasksFromLocalStorage()
  }, [])

  // CRUD operations
  const submitHandler = (e, data) => {
    e.preventDefault()
    setTasksInLocalStorage(data)
    getAllTasksFromLocalStorage()
  }
  const updateTaskMessage = (e, data) => {
    e.preventDefault()
    const filteredTask = totalTasks?.filter((task) => task.id !== data?.id)
    filteredTask.unshift(data)
    window?.localStorage?.setItem('TaskMessages', JSON.stringify(filteredTask))
    getAllTasksFromLocalStorage()
    closeModal()
    setSingleTask('')
  }
  const markAsCompleted = (id, isCompleted) => {
    const markedTask = totalTasks?.filter((task) => task.id === id)
    const filteredTask = totalTasks?.filter((task) => task.id !== id)
    markedTask[0].isCompleted = !isCompleted
    filteredTask.unshift(markedTask[0])
    window?.localStorage?.setItem('TaskMessages', JSON.stringify(filteredTask))
    getAllTasksFromLocalStorage()
  }

  const removeTaskHandler = (id) => {
    const filteredTask = totalTasks?.filter((task) => task.id !== id)
    window?.localStorage?.setItem('TaskMessages', JSON.stringify(filteredTask))
    closeModal()
    getAllTasksFromLocalStorage()
  }

  return (
    <>
      <div className='tasks'>
        <div className='tasks__header'>
          <h4>
            Tasks <span>{totalTasks?.length}</span>
          </h4>
          <div className='icon__wrapper' onClick={() => openModal(true)}>
            <BiPlus />
          </div>
        </div>
        <div className='tasks__container'>
          {totalTasks?.map((task) => (
            <Task
              editTaskIdHandler={editTaskIdHandler}
              removeTaskHandler={removeTaskHandler}
              markAsCompleted={markAsCompleted}
              key={task.id}
              task={task}
            />
          ))}
        </div>
        <div className='add__task' onClick={() => openModal(true)}>
          <FaPlusCircle />
          <h4>Add Task</h4>
        </div>
      </div>
      <Modal
        updateTaskMessage={updateTaskMessage}
        submitHandler={submitHandler}
        data={singleTask?.[0]}
      />
    </>
  )
}

export default Tasks
