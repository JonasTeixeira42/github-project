import { handleError } from 'services/response'

import api from 'utils/api'

const PATH = 'users'

export const getUsers = () => {
  return api
    .get(PATH)
    .then((response) => response)
    .catch((error) => handleError(error))
}
