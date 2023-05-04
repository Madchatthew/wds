import { useState } from "react"

function App() {
  const [name, setName] = useState("Chad")

  function handleClick() {
    setName("More Cowbell")
  }
  return <h1 onClick={handleClick}> Hi {name}</h1>
}

export default App
