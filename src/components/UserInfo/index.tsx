import React from 'react'

import { Users } from 'hooks/use-users'

import * as S from './styles'

export type UserInfoProps = Omit<Users, 'avatar_url'>

const UserInfo = ({ id = 1, login = '', html_url = '' }: UserInfoProps) => {
  return (
    <S.Wrapper>
      <S.Id>{id}</S.Id>
      <S.Name>{login}</S.Name>
      <S.Link href={html_url} target="_blank">
        Go to profile
      </S.Link>
    </S.Wrapper>
  )
}

export default UserInfo
