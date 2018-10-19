import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      allArticles: [],
      newestArticles: [
        {
          toread: 'yes',
          time: '2018-09-29T20:27:51Z',
          tags: '',
          shared: 'no',
          meta: '970489533cf48d42be12797bf28abcda',
          href:
            'https://medium.com/swlh/dont-listen-to-those-productivity-gurus-why-waking-up-at-6am-won-t-make-you-successful-b3c77921d9fd',
          hash: 'e2b30e035f8ec01b0cedfea3e74ec122',
          extended: '',
          description:
            'Don’t listen to those productivity gurus: why waking up at 6am won’t make you successful'
        }
      ],
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
      async getRecentPins({ commit, state }) {
        const response = await this.$axios.$get(
          `/api/users?list=newest&token=${state.pinboardToken}`
        )
        commit('updateNewestArticles', response.data)
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
