import React from 'react'
import { UserProvider } from './UserContext'
import UserProfile from './Components/UserProfile'
import UpdateUser from './Components/UpdateUser'

const App = () => {
  return (
    <UserProvider>
        <UserProfile/>
        <UpdateUser/>
    </UserProvider>
  )
}

export default App