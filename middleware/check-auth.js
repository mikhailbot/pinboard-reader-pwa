import { getTokenFromLocalStorage } from '@/utils/auth'

export default ({ isServer, store, req }) => {
  // If nuxt generate, pass this middleware
  if (isServer && !req) return
  const token = getTokenFromLocalStorage()
  store.commit('addUserToken', token)
}
