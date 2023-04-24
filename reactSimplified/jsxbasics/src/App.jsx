import { useState } from "react"
import react from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    // Use camelCase instead of dash for html attributes, unless using data attribute or aria attribute
    // Can't use class for attribute, use className instead - class is used to make actual classes in react
    <h1 id="5" tabIndex="1" data-id="something" className="blue">
      "Hello World!"
    </h1>
    // (
    //   // Can't use for attribute, use htmlFor - for is used in react
    //   <label htmlFor="id">Hi</label>
    // )
  )
}

export default App
