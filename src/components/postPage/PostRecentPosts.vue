<template>

  <div class="container px-lg-4">

    <div class="row recent-posts">
      <h2>Our Recent Posts</h2>

      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
      />


    </div>

    <a href="#appurl" class="btn btn-blue">get free card</a>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import blogMixin from "@/mixins/blogMixin";
import {mapMutations} from "vuex";
export default {
  components: {PostItem},
  methods: {

    ...mapMutations({
      setLimit: 'post/setLimit'
    }),
  },
  mixins:[blogMixin],
  mounted() {
    this.setLimit(3);
    this.fetchPosts();
  }
}
</script>

<style>

</style>