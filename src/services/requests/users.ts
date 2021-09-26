import { handleError } from 'services/response'

import { UserCardProps } from 'components/UserCard'

import api from 'utils/api'

const PATH = 'users'

export const getAllUsers = () => {
  return api
    .get<UserCardProps[]>(PATH)
    .then((response) => response)
    .catch((error) => handleError(error))
}
