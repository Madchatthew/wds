import { useState } from "react"
import { TodoList } from "./TodoList"
import { MyName } from "./MyName"
import { TodoListClass } from "./TodoListClass"
import { MyNameClass } from "./MyNameClass"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyName />
      <h1>Todo List</h1>
      <TodoList />
      <TodoListClass />
      <MyNameClass />
    </div>
  )
}

export default App
