import { handleError } from 'services/response'

import api from 'utils/api'

export const getRepositories = (user: string) => {
  return api
    .get(`users/${user}/repos`)
    .then((response) => response)
    .catch((error) => {
      handleError(error)
    })
}
