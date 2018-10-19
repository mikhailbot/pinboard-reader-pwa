<template>
  <div>
    hash
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
