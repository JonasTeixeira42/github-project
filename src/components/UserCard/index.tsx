import React from 'react'

import * as S from './styles'

export type UserCardProps = {
  id?: string
  name?: string
  image?: string
}

const UserCard = ({ id = '', name = '', image = '' }: UserCardProps) => {
  return (
    <S.Wrapper>
      <S.Image src={image} alt={name} />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Id>{id}</S.Id>
      </S.Content>
    </S.Wrapper>
  )
}

export default UserCard
