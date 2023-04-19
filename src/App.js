
import './App.css';
import { useState } from 'react';




function App() {
  const [toDos,setTodos] = useState([]);
  const [toDo,setTodo] = useState("");

  return (
    <div>
      <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onChange={(e)=>{
          setTodo(e.target.value)
        }} value={toDo} type="text" placeholder="🖊️ Add item..." />
        <i  onClick={()=>{
          setTodos([...toDos,{id : Date.now(), value : toDo, status : false}])
            }
          } className="fas fa-plus"></i>
      </div>


      <div className="todos">
       {
       toDos.map((obj)=>{
      return  (
        <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            setTodos(toDos.filter(obj2 => { 
              if(obj.id===obj2.id){
                obj2.status=e.target.checked;
                
              }
              
              return obj2;
             }))
          }} 
            value={obj.status}  type="checkbox" name="" id="" />
          <p>{obj.value}</p>
        </div>
        <div className="right">
          <i onClick={()=>{
            setTodos(toDos.filter(obj3=>{
              
              if(obj3.id !== obj.id){
               return obj3;
              }
              return null;
            }))
          }} className="fas fa-times"></i>
        </div>
      </div>
        )
       })
   
}
      </div>
      <br />
      <h1> LIST THAT YOU HAVE DONE...! </h1>

      {
        toDos.map((obj)=>{
          console.log(obj);
          if(obj.status){
            return( <h1>* {obj.value}</h1> )
          }
          return null;
        })
      }
    </div>
    </div>
  ); 
}

export default App;
