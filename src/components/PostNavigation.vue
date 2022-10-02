<template>
  <nav class="navigation pagination" role="navigation">
    <div class="nav-links">
      <a class="prev"></a>
      <div>
        <span
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page-numbers"
            aria-current="page"
            :class="{
              'current': page === pageNumber
            }"
            @click="changePage(pageNumber, this.$store.state.post.categoryId, this.$store.state.post.categorySlug)"
        >
          {{ pageNumber }}
        </span>
      </div>
      <a
          v-if="page < totalPages"
          class="next page-numbers"
          @click="changePage(page + 1, this.$store.state.post.categoryId, this.$store.state.post.categorySlug)"
      >
        Newer
        <img src="http://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/arrow-right.png" alt="/">
      </a>
    </div>
  </nav>
</template>


<script>
import blogMixin from "@/mixins/blogMixin";

export default {
  mixins: [blogMixin]
}
</script>

<style>

</style>