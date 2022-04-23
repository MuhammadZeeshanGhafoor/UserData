// import { Typography } from '@material-ui/core';
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// const toComponentB=()=>{
//   navigate('/:id',{state:{id:`${todo.id}`,name:`${todo.title}`}});
//     }

const HomePage = () => {
  
  // const stateToTransfer = {
  //   state: "{'/:id',{state:{id:`${todo.id}`,name:`${todo.title}`}}"
  // };
  const state = useSelector((state) => state);
  console.log(state);
  const todos = state.todos.todos;
  return (
    
    <div className="w-full bg-slate-300 flex  justify-center">
      <h1 className="mt-10 text-3xl font-bold">Home</h1>
      <div className="w-11/12  mt-36 bg-white mr-12">
      <ul className="flex justify-between p-5 text-left ">
          <li className="w-1/6">Id</li>
          <li className="w-1/6 ">UserId</li>
          <li className="w-5/12 ">Title</li>
          <li className="w-1/16">Completed</li>

          </ul>
          <hr></hr>
        {todos ? (
          todos.map((todo) => (
            <>
            
            <ul className="flex justify-between p-5 text-left ">
          <li className="w-1/6"><Link to={`/${todo.id}`} key={todo.id}> {todo.id} </Link></li> 
         <li className="w-1/6 "><Link to={`/${todo.id}`} key={todo.id}> {todo.userId}</Link></li>
          <li className="w-5/12 capitalize"><Link to={`/${todo.id}`} key={todo.id}>{todo.title}</Link></li>
          <li className="w-1/16"><Link to={`/${todo.id}`} key={todo.id}>{todo.completed == true  ? "Yes" : "No"}</Link></li>
          {console.log(todo)}
          
          </ul>
          <hr></hr>
          </>
          ))
        ) : (
          <h1>Loading...</h1>
          )}
        
      </div>
      

        
            {/* <Link to={`/${todo.id}`} key={todo.id}>
              <li onClick={clickHandler}>{todo.title}</li>
            </Link> */}
          
         
      
      
    </div>
    
  );
};

export default HomePage;
