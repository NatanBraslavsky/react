import UpdateUser from "./Components/UpdateUser"
import UserProfile from "./Components/UserProfile"
import { UserProvider } from "./UserContext"

const App = () => {
  return (
    <UserProvider>
      <UserProfile/>
      <UpdateUser/>
    </UserProvider>
  )
}

export default App