import Navbar from "./components/Navbar"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"


const App =() =>{

  let projectName = "React.JS Todo List"
  let todos = ["Eat", "Sleep" , "Code" , "Repeat"]

 return (
   <>
    <Navbar projectName={projectName}  />
    <Form/>
    <ListGroup  todos= {todos}/>
   </>
 )
}

export default App