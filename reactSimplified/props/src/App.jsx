import React from "react"
import { NameFunc } from "./NameFunc"
import { NameClass } from "./NameClass"
import { TodoListItem } from "./TodoListItem"

function App() {
  return (
    // <div>
    //   <NameFunc name="Custom Name" age={46} isProgrammer />
    //   {/* <NameClass /> */}
    // </div>

    //   <div>
    //     <NameFunc>
    //       <span>Child Name</span>
    //     </NameFunc>
    //     {/* <NameClass /> */}
    //   </div>

    <TodoListItem isComplete>Item Checked</TodoListItem>
  )
}

export default App
