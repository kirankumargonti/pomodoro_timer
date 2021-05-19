import React, {useEffect, useState} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {v4 as uuid} from 'uuid'

const Modal = ({data, submitHandler, updateTaskMessage}) => {
  const [taskMessage, setTaskMessage] = useState('')

  const closeModal = () => {
    document.querySelector('.modal').style.visibility = 'hidden'
    setTaskMessage('')
  }
  const task = {
    id: data?.id ? data?.id : uuid(),
    message: taskMessage,
  }

  useEffect(() => {
    if (data) {
      task.id = data?.id
      setTaskMessage(data?.message)
    }
  }, [data])

  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__container__header'>
          <AiFillCloseCircle className='close__icon' onClick={closeModal} />
        </div>
        <div className='modal__container__content'>
          <form
            className='form'
            id='form'
            onSubmit={
              data?.id
                ? (e) => updateTaskMessage(e, task) & setTaskMessage('')
                : (e) => submitHandler(e, task) & setTaskMessage('')
            }
          >
            <div className='input_wrapper'>
              <input
                type='text'
                placeholder='What are you working on?'
                value={taskMessage}
                onChange={(e) => setTaskMessage(e.target.value)}
              />
            </div>
            <div className='buttons__container'>
              <p className='btn__one' onClick={closeModal}>
                Cancel
              </p>
              <button type='submit'>{data?.id ? 'Update' : 'Save'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
