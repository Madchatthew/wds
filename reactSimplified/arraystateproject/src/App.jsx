import { useState } from "react"

function App() {
  const [array, setArray] = useState(["A", "B", "C"])

  function removeFirstElement()

  return (
      <div>{array.join(", ")}
        <button onClick={removeFirstElement}>Remove First Element</button>
      </div>
  )
}

export default App
