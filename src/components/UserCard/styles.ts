import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.medium};
    box-shadow: ${theme.shadow.default};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
  `}
`

export const Image = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  object-fit: cover;

  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    text-align: center;
  `}
`

export const Id = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
