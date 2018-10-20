import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      allArticles: [],
      newestArticles: [],
      oldestArticles: [],
      pinboardToken: ''
    },

    mutations: {
      addUserToken(state, payload) {
        state.pinboardToken = payload
      },
      updateNewestArticles(state, payload) {
        state.newestArticles = payload
      }
    },

    actions: {
      addUserToken({ commit }, payload) {
        commit('addUserToken', payload)
      },
      async getNewestArticles({ commit, state }) {
        if (!state.newestArticles.length) {
          const response = await this.$axios.$get(
            `/api/users?list=newest&token=${state.pinboardToken}`
          )
          commit('updateNewestArticles', response.data)
        }
      },

      async getNewestReaderVersions({ commit, state }) {
        const data = state.newestArticles.map(article => {
          return article.href
        })

        const response = await this.$axios.$post('/api/articles', {
          articles: data
        })

        commit(
          'updateNewestArticles',
          addReaderVersion(state.newestArticles, response.data)
        )
      }
    },

    getters: {
      getPinboardToken: state => {
        return state.pinboardToken
      },

      newestArticles: state => {
        return state.newestArticles
      },

      getArticle: state => hash => {
        return state.newestArticles.find(article => article.hash === hash)
      }
    }
  })
}

const addReaderVersion = (articles, readerVersion) => {
  return articles.map(article => {
    const parsed = readerVersion.find(elem => {
      return elem.href === article.href
    })
    return { ...article, readableHtml: parsed['readable_html'] }
  })
}

export default createStore
