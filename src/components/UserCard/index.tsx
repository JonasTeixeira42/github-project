import React from 'react'

import * as S from './styles'

export type UserCardProps = {
  id?: number
  login?: string
  avatar_url?: string
  onClick?: (username: string) => void
}

const UserCard = ({
  id = 1,
  login = '',
  avatar_url = '',
  onClick
}: UserCardProps) => {
  const handleClick = (username: string) => {
    !!onClick && onClick(username)
  }

  return (
    <S.Wrapper onClick={() => handleClick(login)}>
      <S.Image src={avatar_url} alt={login} />
      <S.Content>
        <S.Name>{login}</S.Name>
        <S.Id>{id}</S.Id>
      </S.Content>
    </S.Wrapper>
  )
}

export default UserCard
