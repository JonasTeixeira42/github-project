import React from 'react'

import { Repositories } from 'hooks/use-repositories'
import headers from './header'

import * as S from './styles'

export type TableProps = {
  repositories: Repositories[]
}

const Table = ({ repositories = [] }: TableProps) => {
  return (
    <S.Wrapper role="table">
      <S.Row role="rowgroup">
        {headers.map((header) => (
          <S.Cell key={header} role="cell">
            <S.Header>{header}</S.Header>
          </S.Cell>
        ))}
      </S.Row>
      {repositories.map((repository) => (
        <S.Row key={repository.id} role="rowgroup">
          <S.Cell role="cell">{repository.id}</S.Cell>
          <S.Cell role="cell">{repository.name}</S.Cell>
          <S.Cell role="cell">
            <S.Link href={repository.html_url} target="_blank">
              Go to repository
            </S.Link>
          </S.Cell>
        </S.Row>
      ))}
    </S.Wrapper>
  )
}

export default Table
