import Navbar from "./components/Navbar"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import { useState } from "react"


const App =() =>{

  let projectName = "React.JS Todo List"
 

const [todos, setTodos] = useState([{
    id : 1,
    text : "Eat"
  },
  {
    id : 2,
    text : "Sleep"
  },
  {
    id : 3,
    text : "Code"
  },
  {
    id : 4,
    text : "Repeat"
  }
])

//    C L E A R    A L L
const clearAll =()=>{
  setTodos([])
}


//   R E M O V E   T O D O
const removeTodo = (id)=>{
  setTodos(todos.filter(todo => todo.id !== id))
}




// A D D    T O D O
const addTodo = (todo)=>{
   setTodos([todo, ...todos])
  // console.log(todo)
}



//  E D I T    T O D O
const [edit, setEdit] = useState({
  todo : {},
  isEdit: false
})



const editTodo =(todo)=>{
  setEdit({
    todo : todo,
    isEdit: true
  })
}




// U P D A T E    T O D O
const updateTodo = (updatedTodo)=>{
  // console.log(updatedTodo)
  // setTodos(todos.map((todo) => {
  //   if(todo.id === updatedTodo.id){
  //     return updatedTodo
  //   }else{
  //     return todo
  //   }
  // }))

  setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo))


  setEdit({todo: {}, isEdit: false})


}




// let dark = false
const [dark, setDark] = useState(false)

const changeTheme = ()=>{
  setDark(!dark)
}

 return (
   <>
    <Navbar projectName={projectName}  changeTheme={changeTheme}/>
    <div className={dark ? "p-8 min-h-screen bg-gray-950 text-white" : "p-8 min-h-screen" }>

      <Form addTodo = {addTodo} edit = {edit} updateTodo = {updateTodo} />
      <ListGroup  todos= {todos} clearAll = {clearAll} removeTodo = {removeTodo} editTodo = {editTodo} />
    </div>
   </>
 )
}

export default App