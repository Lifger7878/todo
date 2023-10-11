import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Task = ({task , deleteTodo , index, handleEdit}) => {

  return (
    <div className='task'>
        <h2> {task} </h2>
        <Button variant="primary" className='delete-btn' onClick={() => deleteTodo(index)}> ВИДАЛИТИ </Button>
        <Button variant="Light" className='edit-btn' onClick={() => handleEdit(index)}> Редагувати </Button>

    </div>
  )
}

export default Task;