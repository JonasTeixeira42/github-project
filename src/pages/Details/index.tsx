import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Heading from 'components/Heading'
import UserInfo from 'components/UserInfo'

import { Users, useUsers } from 'hooks/use-users'

import * as S from './styles'

type ParamsProps = {
  username?: string
}

const Details = () => {
  const [user, setUser] = useState<Users>()

  const { users } = useUsers()
  const { username } = useParams<ParamsProps>()

  useEffect(() => {
    if (username) {
      const result = users.find((item) => item.login === username)
      !!result && setUser({ ...result })
    }
  }, [username, users])

  return (
    <S.Wrapper>
      <S.Section>
        <Heading size="large">User Details</Heading>

        {!!user?.id && (
          <UserInfo id={user.id} login={user.login} html_url={user.html_url} />
        )}
      </S.Section>
    </S.Wrapper>
  )
}

export default Details
