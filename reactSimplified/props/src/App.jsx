import React from "react"
import { NameFunc } from "./NameFunc"
import { NameClass } from "./NameClass"
import { TodoListItem } from "./TodoListItem"
import { TodoListItemClass } from "./TodoListItemClass"

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

    <div>
      <NameClass name="Custom Name">This is a child item</NameClass>

      {/* <TodoListItem isComplete>Item List</TodoListItem> */}

      <TodoListItemClass isComplete={false}>Todo Item 1</TodoListItemClass>
    </div>
  )
}

export default App
