import { createContext, useState } from "react";

export const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const storedItems = localStorage.getItem('mikeflix')
    if (!storedItems) {

      const defaultUser = { user: 'user', password: 'user', id: 1 }
      localStorage.setItem('mikeflix', JSON.stringify([defaultUser]))
      return [defaultUser]
    }

    const parsedUsers = JSON.parse(storedItems)
    return parsedUsers
  });

  const addUser = (user) => {
    setUsers((current) => {
      const updateUser = [...current, user];
      localStorage.setItem('mikeflix', JSON.stringify(updateUser))
      return updateUser;
    })
  }

  const userData = {
    addUser,
    users,
  }

  return (
    <MovieContext.Provider value={userData}>
      {children}
    </MovieContext.Provider>
  )
}
