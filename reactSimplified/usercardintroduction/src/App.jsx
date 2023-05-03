import "./user.css"
import user from "./user.json"
import { UserCard } from "./UserCard"
import { UserCardClass } from "./UserCardClass"

function App() {
  return (
    <>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />

      <UserCardClass>
        {user.name}
        {user.age}
        {user.phoneNumber}
        {user.address}
      </UserCardClass>
    </>
  )
}

export default App
