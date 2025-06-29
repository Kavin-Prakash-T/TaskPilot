import './ShowTask.css'
import React from 'react'
const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id);
    setTask(selectedTask);

  }
  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTaskList);
  }

  return (
    <section className="showtask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearall" onClick={() => setTasklist([])}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <p className="icons">
              <i className="bi bi-pencil-square edit" role="button" tabIndex={0} onClick={() => handleEdit(task.id)}></i>
              <i className="bi bi-trash del" role="button" tabIndex={0} onClick={() => handleDelete(task.id)}></i>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShowTask