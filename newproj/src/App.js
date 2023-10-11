import { useState } from 'react';
import Task from './task';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(0);

  //adding Task
  function AddTask() {
    if (task !== "") {
      setTaskList([...taskList, { task, index: `${task}-${Date.now()}` }]);
      setTask('');
    }

    if (editId) {
      const editTask = taskList.find((i) => i.index === editId);
      const updatedTasks = taskList.map((t) => 
        t.index === editTask.index ? t= {index: t.index , task} : {index: t.index, task: t.task}
      )
      setTaskList(updatedTasks);
      setEditId(0);
      return;
    }
  }

  // deleting Todo .
  const deleteTodo = (index) => {
    var newList = taskList;
    newList.splice(index, 1);
    setTaskList([...newList]);
  }

  // Editing Task
  const handleEdit = (index) => {
    const editTask = taskList.find((i) => i.index === index);
    setTask(editTask.task);
    setEditId(index);
  }

  return (
    <div className="App">
     
      <Form>

        <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label className='title'> Напишіть завдання </Form.Label>
      <Form.Control type='text' value={task} onChange={(e) => { setTask(e.target.value) }} />
        </Form.Group>
      <Button variant="success" onClick={AddTask}> Додати </Button>
      </Form>

      {taskList.map((task) => {
        return <Task task={task.task} deleteTodo={deleteTodo} index={task.index} handleEdit={handleEdit} />
      })}

    </div>
  );
}

export default App;