<template>
  <div class="p-4 m-4 bg-white rounded">
    <nuxt-link
      :to="'/articles/' + article.hash"
      class="text-2xl block text-black font-semibold no-underline mb-6">{{ article.description }}</nuxt-link>

    <a
      :href="article.href"
      class="block text-grey-darker text-sm no-underline"
      target="_blank">{{ article.href }}</a>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>
</style>
