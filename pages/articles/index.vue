<template>
  <div>
    <h1>Articles</h1>
    <button 
      class="bg-blue i:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
      @click="getRecentPins()">
      Get Newest Pins
    </button>

    <button
      class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
      @click="getNewestReaderVersions()">
      Get Reader Versions
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async fetch({ store, redirect }) {
    if (store.state.pinboardToken) {
      await store.dispatch('getRecentPins')
    } else {
      redirect('/')
    }
  },

  methods: {
    ...mapActions(['getRecentPins', 'getNewestReaderVersions'])
  }
}
</script>

<style>
</style>
