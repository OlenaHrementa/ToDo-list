import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Do YOGA' },
    { id: 2, completed: false, title: 'Learn React' },
    { id: 3, completed: false, title: 'Visit English clase' }
  ])

  // let peoples = [
  //   { id: 1, name: 'Ola', title: ' YOGA' },
  //   { id: 2, name: 'Anna', title: 'React' },
  //   { id: 3, name: 'Olexandr', title: 'English' }
  // ]

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
      title,
      id: Date.now(),
      completed: false
    }
  ])
  )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 className="header">To Do List</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos</p>}
      </div>
    </Context.Provider>
  )
}

export default App;
