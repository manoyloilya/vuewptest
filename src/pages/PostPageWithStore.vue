<template>
    <main class="main-content">
      <section class="blog" :class="(isPostsLoading) ? 'loading-posts' : ''">
        <post-categories></post-categories>
        <div class="container px-md-3 px-lg-4">
          <post-list
              :posts="sortedAndSearchedPosts"
              v-if="!isPostsLoading"
          />
          <div v-else>Идет загрузка...</div>
          <post-navigation></post-navigation>
        </div>
      </section>
    </main>
</template>

<script>
import PostList from "@/components/PostList";
import axios from 'axios';
import PostNavigation from "@/components/PostNavigation";
import blogMixin from "@/mixins/blogMixin";
import PostCategories from "@/components/PostCategories";

export default {
  components: {
    PostCategories,
    PostList,
    PostNavigation,
  },
  mounted() {
    if (this.$route.params.page) {
      this.setPage(this.$route.params.page);
    }
    this.setLimit(9);
    this.fetchPosts();
    this.fetchCategories();
  },
  mixins: [blogMixin]
}
</script>

<style>
  section.blog {
    position: relative;
  }
</style>
