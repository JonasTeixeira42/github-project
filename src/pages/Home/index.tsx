import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Heading from 'components/Heading'
import Pagination from 'components/Pagination'
import UserCard, { UserCardProps } from 'components/UserCard'

import { useUsers } from 'hooks/use-users'

import * as S from './styles'

const Home = () => {
  const [paginationUsers, setPaginationUsers] = useState<UserCardProps[]>([])

  const history = useHistory()
  const { users } = useUsers()

  useEffect(() => {
    const newUsers = users.slice(0, 8)

    setPaginationUsers([...newUsers])
  }, [users])

  const handleClick = (username: string) => {
    history.push(`details/${username}`)
  }

  const onChangePage = (startIndex: number, endIndex: number) => {
    const newUsers = users.slice(startIndex, endIndex)

    setPaginationUsers([...newUsers])
  }

  return (
    <S.Wrapper>
      <S.Main>
        <Heading size="large">Users</Heading>

        <S.Section>
          {paginationUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              avatar_url={user.avatar_url}
              login={user.login}
              onClick={(username) => handleClick(username)}
            />
          ))}
        </S.Section>
        <Pagination
          dataLength={users.length}
          itemsPerPage={8}
          onChangePage={(s, e) => onChangePage(s, e)}
        />
      </S.Main>
    </S.Wrapper>
  )
}

export default Home
