import React from 'react'

const Task = ({ task, changed, deleteTask, done }) => {
  let check = <td> {task.text}</td>
  if (task.done === true) {
    check = (
    <td>
      <del>{task.text}</del>
    </td>
    )
  }
  return (
    <tr className='bg-gray-50'>
      <td className='py-2'>
        <input type='checkbox' className='cursor-pointer appearance-none h-6 w-6 border-2 border-gray-300 checked:bg-green-500' onChange={done}></input>
      </td>
      <td>{task.id}</td>
      <td className='font-bold text-xl text-center text-blue-500'>{check}</td>
      <td>
        <button onClick={deleteTask} className='text-red-500 text-2xl'>X</button>
      </td>
      <td className='py-2 w-1/4'>
        <input type='text' onChange={changed} placeholder={'Edit ' + task.text} className='border-2 p-1 rounded-md' />
      </td>
    </tr>
  )
}
export default Task