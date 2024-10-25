
import React, { useState } from "react";
import {  useTodo } from "../contexts";

function TodoForm(){

    const[todo,setTodo] = useState("");
    const {addTodo} = useTodo();

    function add(e){
        e.preventDefault();

        if (!todo)
            return;

        addTodo({todo, completed:false});

        setTodo("");

    }

    return <>

<div className="flex justify-center mt-4">
  <form onSubmit={add} className="w-3/5 shadow-md rounded-md p-4 flex space-x-4">
    <input
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      className="flex-grow px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
    >
      Add
    </button>
  </form>
</div>


  
    </>

}

export default TodoForm;