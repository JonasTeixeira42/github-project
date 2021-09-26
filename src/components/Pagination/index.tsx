import React, { useState } from 'react'

import * as S from './styles'

export type PaginationProps = {
  dataLength: number
  itemsPerPage: number
  onChangePage?: (startIndex: number, endIndex: number) => void
}

const Pagination = ({
  dataLength,
  itemsPerPage,
  onChangePage
}: PaginationProps) => {
  const pages = Math.ceil(dataLength / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => {
    const startIndex = (currentPage + 1) * itemsPerPage - itemsPerPage
    const endIndex = startIndex + itemsPerPage

    setCurrentPage((page) => page + 1)
    !!onChangePage && onChangePage(startIndex, endIndex)
  }

  const handlePreviousPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage - itemsPerPage
    const endIndex = startIndex + itemsPerPage

    setCurrentPage((page) => page - 1)
    !!onChangePage && onChangePage(startIndex, endIndex)
  }

  return (
    <S.Wrapper>
      <div>
        <S.Button disabled={currentPage <= 1} onClick={handlePreviousPage}>
          Previous
        </S.Button>
      </div>
      <S.Page>{`${currentPage} of ${pages}`}</S.Page>
      <div>
        <S.Button disabled={currentPage === pages} onClick={handleNextPage}>
          Next
        </S.Button>
      </div>
    </S.Wrapper>
  )
}

export default Pagination
