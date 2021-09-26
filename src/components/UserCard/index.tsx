import React from 'react'

import * as S from './styles'

export type UserCardProps = {
  id?: string
  login?: string
  avatar_url?: string
}

const UserCard = ({ id = '', login = '', avatar_url = '' }: UserCardProps) => {
  return (
    <S.Wrapper>
      <S.Image src={avatar_url} alt={login} />
      <S.Content>
        <S.Name>{login}</S.Name>
        <S.Id>{id}</S.Id>
      </S.Content>
    </S.Wrapper>
  )
}

export default UserCard
