import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({todos}) => {
  return (
    <div>
        <ul className='space-y-4 flex flex-col items-center'>
           {/* for(let i=0; i<= ListItems.length ; i++){

           } */}
           
           <ListItems  todos= {todos[0]}/>
           <ListItems/>
           <ListItems/> 
        </ul>
    </div>
  )
}

export default ListGroup