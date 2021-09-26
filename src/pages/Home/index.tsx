import React from 'react'

import { useUsers } from 'hooks/use-users'

import * as S from './styles'

const Home = () => {
  const { users } = useUsers()

  return (
    <S.Wrapper>
      {users.map((user) => (
        <h1 key={user.id}>{user.login}</h1>
      ))}
    </S.Wrapper>
  )
}

export default Home
