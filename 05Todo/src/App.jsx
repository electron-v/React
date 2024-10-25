import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './contexts';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo));
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("TodosList"));
    if (list && list.length > 0) {
      setTodos(list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TodosList", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8 ">
        <TodoForm />
        <div className="gap-y-3 mx-auto">
          {todos?.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
