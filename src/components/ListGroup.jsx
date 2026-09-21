import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({todos, clearAll, removeTodo, editTodo}) => {
  return (
    <div>
        <button onClick={()=> clearAll()} 
            className='p-2 cursor-pointer text-white font-bold bg-red-500 hover:bg-red-600 rounded-md border
             border-white shadow-2xl mb-6 relative left-40'>Clear All</button>
        
        <ul className='space-y-4 flex flex-col items-center'>
           {todos.map((todo)=>{
            return (
              <ListItems key={todo.id}  todos= {todo} removeTodo = {removeTodo} editTodo = {editTodo} />
            )
           })
           }
           
          
        </ul>
    </div>
  )
}

export default ListGroup