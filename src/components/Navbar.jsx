import logo from "../assets/react.svg"

const Navbar = ({projectName = "Default", version = "Default", changeTheme})=>{

  
   return (
    <nav className="bg-amber-400 p-4  flex justify-between items-center">
    <div className="flex">
      <img src={logo} alt="logo" className="mx-2"/>
      <h1 className="text-2xl p-2 "> {projectName} </h1>
    </div>
    <div className="flex items-center space-x-8">
      <button onClick={()=> changeTheme()} className="cursor-pointer rounded-lg border p-2 bg-emerald-600 hover:bg-emerald-700 text-lg text-white font-bold">Theme</button>

      <h1 className="text-xl ">V{version} </h1>
    </div>
   </nav>
   )
}

export default Navbar