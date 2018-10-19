export const setToken = token => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('token', token)
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem('token')
}

export const getTokenFromLocalStorage = () => {
  return window.localStorage.token
}
