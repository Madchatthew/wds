import { useState } from "react"

export function Counter() {
  const [age, setAge] = useState(0)

  return (
    <div>
      <button onClick={() => setAge(currentAge - 1)}> - </button>
      {age}
      <button onClick={() => setAge(currentAge + 1)}> + </button>
    </div>
  )
}
