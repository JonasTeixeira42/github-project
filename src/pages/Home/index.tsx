import React from 'react'
import { useHistory } from 'react-router-dom'

import Heading from 'components/Heading'
import UserCard from 'components/UserCard'

import { useUsers } from 'hooks/use-users'

import * as S from './styles'

const Home = () => {
  const history = useHistory()
  const { users } = useUsers()

  const handleClick = (username: string) => {
    history.push(`details/${username}`)
  }

  return (
    <S.Wrapper>
      <S.Main>
        <Heading size="large">Users</Heading>

        <S.Section>
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              avatar_url={user.avatar_url}
              login={user.login}
              onClick={(username) => handleClick(username)}
            />
          ))}
        </S.Section>
      </S.Main>
    </S.Wrapper>
  )
}

export default Home
