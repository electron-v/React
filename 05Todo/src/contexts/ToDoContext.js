
import { createContext,useContext } from "react";

export const ToDoContext = createContext({

    todos : [
        {'id':1,
          'todo':'The first todo',
          'completed':false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}

});

export const useTodo= () =>{
    return useContext(ToDoContext);
}

export const TodoProvider = ToDoContext.Provider;
