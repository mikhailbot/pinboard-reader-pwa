<template>
  <div class="container mx-auto">
    <div
      v-for="article in newestArticles"
      :key="article.href"
      class="max-w-md mx-auto">
      <article-list-item :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { ArticleListItem },

  middleware: 'authenticated',

  async fetch({ store, redirect }) {
    if (store.state.pinboardToken) {
      await store.dispatch('getRecentPins')
    } else {
      redirect('/')
    }
  },

  computed: {
    ...mapGetters(['newestArticles'])
  },

  mounted() {
    this.$store.dispatch('getNewestReaderVersions')
  },

  methods: {
    ...mapActions(['getRecentPins', 'getNewestReaderVersions'])
  }
}
</script>

<style>
</style>
