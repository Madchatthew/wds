import React from "react"
import { NameFunc } from "./NameFunc"
import { NameClass } from "./NameClass"

function App() {
  return (
    // <div>
    //   <NameFunc name="Custom Name" age={46} isProgrammer />
    //   {/* <NameClass /> */}
    // </div>

    <div>
      <NameFunc>
        <span>Child Name</span>
      </NameFunc>
      {/* <NameClass /> */}
    </div>
  )
}

export default App
