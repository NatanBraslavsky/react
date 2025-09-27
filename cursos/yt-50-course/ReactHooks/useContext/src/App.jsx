import UserProfile from "./Components/UserProfile"
import { UserProvider } from "./UserContext"

const App = () => {
  return (
    <UserProvider>
      <UserProfile/>
    </UserProvider>
  )
}

export default App