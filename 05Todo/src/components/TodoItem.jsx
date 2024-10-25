import React, { useEffect } from "react";
import { useTodo } from "./../contexts"
import { useState } from "react";

function TodoItem({ todo }) {

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, toggleCompleted, updateTodo } = useTodo();


  console.log(12, todo.todo);

  return <>
    <div className="flex justify-center">
      <div className="w-3/5">
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-4">
          <div className="flex items-center space-x-4 w-full">
            <input type="checkbox"
              value={todo.completed}
              onChange={() => toggleCompleted(todo.id)} className="form-checkbox h-5 w-5 text-blue-600" />
            <input
              type="text"
              value={todoMsg}
              readOnly={!isTodoEditable}
              onChange={(e) => setTodoMsg(e.target.value)}
              className={`flex-grow p-2 border border-gray-300 rounded-md
                 bg-gray-100 w-3/5 ${todo.completed ? "line-through bg-green-200 border-white" : ""}`}
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => {

                if (todo.completed) return;

                if (isTodoEditable) {
                  updateTodo(todo.id, { ...todo, todo: todoMsg });
                  setIsTodoEditable(false);
                }
                else {
                  setIsTodoEditable((prev) => !prev);
                }


              }}
              disabled={todo.completed}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              {isTodoEditable ? "📁" : "✏️"}
              <span> {isTodoEditable ? "Save" : "Edit"}</span>
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
              ❌
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default TodoItem;