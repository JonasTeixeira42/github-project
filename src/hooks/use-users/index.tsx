import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { getAllUsers } from 'services/requests/users'

export type Users = {
  id?: number
  login?: string
  avatar_url?: string
  html_url?: string
}

type UserContextData = {
  users: Users[]
}

const UserContextDefaultValues = {
  users: []
}

const UserContext = createContext<UserContextData>(UserContextDefaultValues)

type UserProviderProps = {
  children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        const newUsers = response.data.map((user: Users) => ({
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url
        }))

        setUsers([...newUsers])
      })
      .catch((error) => toast.error(error))
  }, [])

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  )
}

const useUsers = () => useContext(UserContext)

export { UserProvider, useUsers }
