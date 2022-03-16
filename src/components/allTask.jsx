import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, taskChange, onDone }) => {
  return (
    <tbody className='w-full text-center'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={() => onDelete(task.id)} changed={(event) => taskChange(event, task.id)} done={(event) => onDone(event, task.id)}
        />))}
    </tbody>)
}
export default Tasks