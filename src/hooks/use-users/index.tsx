import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { UserCardProps } from 'components/UserCard'

import { getAllUsers } from 'services/requests/users'

type UserContextData = {
  users: UserCardProps[]
}

const UserContextDefaultValues = {
  users: []
}

const UserContext = createContext<UserContextData>(UserContextDefaultValues)

type UserProviderProps = {
  children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<UserCardProps[]>([])

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        const newUsers = response.data.map((user: UserCardProps) => ({
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url
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
