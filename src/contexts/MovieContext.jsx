import { createContext, useState } from "react"
export const MovieContext = createContext()

export default function MovieContextProvider({ children }) {

  const [users, setUsers] = useState(() => {
    const storedItems = localStorage.getItem('mikeflix')
    if (!storedItems) return []
    const users = JSON.parse(storedItems)
    return users
  })

  const addUser = (user) => {
    setUsers(current => {
      const updateUser = [...current, user]
      localStorage.setItem(('mikeflix'), JSON.stringify(updateUser))
      return updateUser
    })
  }

  const userData = {
    addUser,
    users
  }

  return (
    <MovieContext.Provider value={userData}>
      {children}
    </MovieContext.Provider>
  )
}