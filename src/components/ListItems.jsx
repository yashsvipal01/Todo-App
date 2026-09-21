import React from 'react'

const ListItems = ({todos, removeTodo, editTodo}) => {
  return (
    <div className='w-3/4'>
        <li className='border p-4 rounded-md border-gray-200 shadow-xl flex items-center justify-between '>
                <div>
                    <p className='text-gray-300 text-sm'>{todos.id}</p>
                    <h1 className='text-2xl font-bold'>{todos.text}</h1>
                </div>
                <div className=' space-x-4'>
                    <button onClick={()=> editTodo(todos)} className='cursor-pointer bg-yellow-500 hover:bg-yellow-600 p-2 text-white rounded-md font-bold'>Edit</button>
                    <button onClick={()=> removeTodo(todos.id)} className='cursor-pointer bg-red-600 hover:bg-red-800 p-2 text-white rounded-md font-bold'>Delete</button>
                </div>
            </li>
    </div>
  )
}

export default ListItems