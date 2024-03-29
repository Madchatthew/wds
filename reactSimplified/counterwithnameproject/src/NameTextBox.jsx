import { useState } from "react"

export function NameTextBox() {
  const [name, setName] = useState("")

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
