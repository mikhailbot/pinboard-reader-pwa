<template>
  <div class="max-w-md bg-white rounded p-4 m-4 mx-auto">
    <h1 class="mb-4">{{ description }}</h1>
    <a
      :href="href"
      class="block mb-8 text-blue-dark">{{ parseDomain }}</a>
    <article v-html="readableHtml">&nbsp;</article>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',

  layout: 'article',

  asyncData({ store, params, redirect }) {
    const article = store.getters.getArticle(params.hash)

    if (article.readableHtml) {
      return article
    } else {
      window.open(article.href, '_blank')
      return redirect('/articles')
    }
  },

  computed: {
    parseDomain() {
      if (this.href) {
        let link = document.createElement('a')
        link.href = this.href
        return link.hostname
      } else {
        return ''
      }
    }
  }
}
</script>

<style>
</style>
