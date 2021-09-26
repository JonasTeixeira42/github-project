import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Table from 'components/Table'
import Heading from 'components/Heading'
import UserInfo from 'components/UserInfo'

import { Users, useUsers } from 'hooks/use-users'
import { useRepositories } from 'hooks/use-repositories'

import * as S from './styles'

type ParamsProps = {
  username?: string
}

const Details = () => {
  const [user, setUser] = useState<Users>()

  const { users } = useUsers()
  const { repositories, fetchRepositories } = useRepositories()
  const { username } = useParams<ParamsProps>()

  useEffect(() => {
    if (username) {
      const result = users.find((item) => item.login === username)
      !!result && setUser({ ...result })

      fetchRepositories(username)
    }
  }, [username, users, fetchRepositories])

  return (
    <S.Wrapper>
      <S.Main>
        <S.Section>
          <Heading size="large">User Details</Heading>

          {!!user?.id && (
            <UserInfo
              id={user.id}
              login={user.login}
              html_url={user.html_url}
            />
          )}
        </S.Section>

        <S.SectionRepositories>
          <Heading size="normal">Repositories</Heading>
          <Table repositories={repositories} />
        </S.SectionRepositories>
      </S.Main>
    </S.Wrapper>
  )
}

export default Details
