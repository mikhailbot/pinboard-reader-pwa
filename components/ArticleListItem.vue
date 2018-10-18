<template>
  <div class="p-4 m-4 bg-white rounded">
    <router-link
      to="#"
      class="text-2xl block text-black font-semibold no-underline mb-4">{{ article.description }}</router-link>

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
