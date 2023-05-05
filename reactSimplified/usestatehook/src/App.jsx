import { useState } from "react"
import { Counter } from "./Counter"

function App() {
  const [name, setName] = useState("Chad")
  const [age, setAge] = useState(46)
  // const [ person, setPerson] = useState({ name: "Chad", age: 46 }) - It is best to separate the variables to make it easier to change values

  // function handleClick() {
  //   setName("More Cowbell")
  //   setAge(age + 1)
  // }

  return <Counter />
}

export default App

{
  /* <h1 onClick={handleClick}>
       Hi {name} {age}
      </h1> */
}
