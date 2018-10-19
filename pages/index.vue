<template>
  <section class="flex flex-col justify-center items-center h-screen pb-12">
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="signIn">
        <div class="mb-6">
          <label
            for="token"
            class="block text-grey-darker text-sm font-bold mb-2">Pinboard Token
          </label>
          <input
            v-model="token"
            name="token"
            type="password"
            required
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-indigo hover:text-indigo-darker"
            href="https://pinboard.in/settings/password"
            target="_blank">
            Get Token
          </a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { setToken } from '~/utils/auth'

export default {
  data() {
    return {
      token: ''
    }
  },

  beforeCreate() {
    if (this.$store.getters.getPinboardToken) {
      this.$router.push('articles')
    }
  },

  methods: {
    signIn() {
      this.addUserToken(this.token)
      setToken(this.token)
      this.$router.push('/articles')
    },
    ...mapActions(['addUserToken'])
  }
}
</script>

<style>
</style>
