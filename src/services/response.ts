import axios, { AxiosError } from 'axios'

export function handleError(error: Error | AxiosError) {
  if (!axios.isAxiosError(error)) {
    return 'Try again later'
  }

  if (error.response) {
    return error.response.data.message
  }

  if (error.request || error.message) {
    return 'Something went wrong, try again later'
  }
}
