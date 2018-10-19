<template>
  <div class="max-w-md bg-white rounded p-4 m-4 mx-auto">
    <h1 class="mb-8">{{ description }}</h1>
    <article v-html="readableHtml">&nbsp;</article>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',

  asyncData({ store, params, redirect }) {
    const article = store.getters.getArticle(params.hash)

    return article ? article : redirect('/articles')
  }
}
</script>

<style>
</style>
