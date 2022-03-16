import React, { useState } from 'react'
import Tasks from './components/allTask'

const App = () => {
	const [state, setState] = useState({
		tasks: [],
		displayTask: true,
		newTask: '',
	})

	const showingTask = () => {
		setState({ ...state, displayTask: !state.displayTask })
	}
	const deleteTask = (id) => {
		const tasks = state.tasks.filter((task) => task.id !== id)
		setState({ ...state, tasks: tasks })
	}
	const changeTask = (event, id) => {
		const taskIndex = state.tasks.findIndex((task) => task.id === id)
		const tasks = [...state.tasks]
		tasks[taskIndex].text = event.target.value
		setState({ ...state, tasks: tasks })
	}
	const taskSet = (event) => {
		setState({ ...state, newTask: event.target.value })
		console.log(state.newTask)
	}
	const recentTask = () => {
		const tasks = [...state.tasks]
		const task = {
			id: Math.floor(Math.random() * 1000000), text: state.newTask,
		}
		tasks.push(task)
		setState({ ...state, tasks: tasks, newTask: '' })
	}
	const finishTask = (event, id) => {
		console.log(event.target.checked, id)
		const taskIndex = state.tasks.findIndex((task) => task.id === id)
		const tasks = [...state.tasks]
		tasks[taskIndex].done = event.target.checked
		setState({ ...state, tasks: tasks })
	}
	let showingTasks = null
	if (state.displayTask) {
		showingTasks = (
			<>
				<table className='mt-10 w-full border p-2 table-auto'>
					<thead className='bg-gray-200'>
						<tr>
							<th className='py-2'>Done</th>
							<th className='py-2'>ID</th>
							<th className='py-2'>Task</th>
							<th className='py-2'>Delete</th>
							<th className='py-2'>Edit</th>
						</tr>
					</thead>
					<Tasks
						tasks={state.tasks} onDelete={deleteTask} taskChange={changeTask} onDone={finishTask}
					/>
				</table> </>
		)
	}
	return (
		<div className='container mx-auto py-10'>
			<h1 className='font-bold text-3xl mb-5'>Todo/Task App</h1>

			<input type='text' onChange={taskSet} value={state.newTask} className='border-2 p-1 rounded-md mr-5' />

			<button onClick={recentTask} className='py-1 px-5 rounded-md bg-green-500 text-white'>Add Task</button>

			<button onClick={showingTask} className='ml-3 py-1 px-5 bg-gray-100 rounded-md'>Hide Tasks</button>

			{showingTasks}
		</div>)
}
export default App