import { useState } from "react"
import { UserContext } from "./UserContext"

const UserProvider = ({ children }) => {
  const [user1, setUser1] = useState({})
  const [user2, setUser2] = useState({})

  return (
    <UserContext.Provider value={{ user1, user2,  setUser1,setUser2 }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider