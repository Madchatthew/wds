import "./styles.css"
import user from "./user.json"
import img from "./Code.png"

function App() {
  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
      <img src={img} />
    </>
  )
}

export default App
