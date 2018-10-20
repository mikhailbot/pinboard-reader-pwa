<template>
  <div class="p-4 m-4 bg-white rounded shadow">
    <div class="flex items-center justify-between">
      <div class="w-full pr-4">
        <nuxt-link
          :to="'/articles/' + article.hash"
          class="text-xl block text-black font-semibold no-underline mb-6">{{ article.description }}</nuxt-link>

        <a
          ref="article_link"
          :href="article.href"
          class="text-grey-dark text-sm no-underline"
          target="_blank">{{ parseDomain }}</a>
      </div>
      <div class="flex h-16 cursor-pointer">
        <svg
          class="fill-current text-indigo w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"/>
        </svg>
      </div>
    </div>
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
  },

  computed: {
    parseDomain() {
      let link = document.createElement('a')
      link.href = this.article.href
      return link.hostname
    }
  }
}
</script>

<style>
</style>
