<template>
  <div class="p-4 ml-4 mr-4 mb-4 bg-white rounded shadow">
    <div class="flex items-center justify-between">
      <div class="w-full pr-4">
        <div class="mb-6">
          <nuxt-link
            :to="'/articles/' + article.hash"
            class="text-xl text-black font-semibold no-underline">{{ article.description }}</nuxt-link>

          <svg
            v-if="article.readableHtml"
            class="h-4 fill-current text-green-dark pl-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
          <svg
            v-if="!article.readableHtml"
            class="h-4 fill-current text-blue-dark pl-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z"/>
          </svg>
        </div>
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
