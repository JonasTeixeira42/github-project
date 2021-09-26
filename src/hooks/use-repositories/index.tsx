import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

import { getRepositories } from 'services/requests/repositories'

export type Repositories = {
  id?: number
  name?: string
  html_url?: string
}

type RepositoryContextData = {
  repositories: Repositories[]
  fetchRepositories: (username: string) => void
}

const RepositoryContextDefaultValues = {
  repositories: [],
  fetchRepositories: () => []
}

const RepositoryContext = createContext<RepositoryContextData>(
  RepositoryContextDefaultValues
)

type RepositoryProviderProps = {
  children: React.ReactNode
}

const RepositoryProvider = ({ children }: RepositoryProviderProps) => {
  const [repositories, setRepositories] = useState<Repositories[]>([])

  const fetchRepositories = (username: string) => {
    getRepositories(username)
      .then((response) => {
        const result = response?.data.map((repository: Repositories) => ({
          id: repository.id,
          name: repository.name,
          html_url: repository.html_url
        }))

        setRepositories([...result])
      })
      .catch((error) => toast.error(error))
  }

  return (
    <RepositoryContext.Provider value={{ repositories, fetchRepositories }}>
      {children}
    </RepositoryContext.Provider>
  )
}

const useRepositories = () => useContext(RepositoryContext)

export { RepositoryProvider, useRepositories }
