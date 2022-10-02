<template :key="postData[0].id">

<!--    <h1>Это страница поста с ID = {{ $route.params.id }}</h1>-->
      <main class="main-content">
        <section class="blog blog-single">
          <post-categories></post-categories>
          <div class="container px-lg-4">
            <div class="blog__post single-post">
              <post-thumb
                v-if="!isPostDataLoading"
              ></post-thumb>

              <h1 v-if="postData[0]">{{postData[0].title.rendered}}</h1>

              <post-info></post-info>
              <post-content  v-if="postData[0]" :key="postData[0].id"></post-content>
              <post-share></post-share>
              <post-tags></post-tags>
            </div>
          </div>

          <post-recent-posts></post-recent-posts>

        </section>
      </main>

</template>

<script>
import PostCategories from "@/components/PostCategories";
import blogMixin from "@/mixins/blogMixin";
import PostRecentPosts from "@/components/postPage/PostRecentPosts";
import PostTags from "@/components/postPage/PostTags";
import PostShare from "@/components/postPage/PostShare";
import PostContent from "@/components/postPage/PostContent";
import PostInfo from "@/components/postPage/PostInfo";
import PostThumb from "@/components/postPage/PostThumb";
import axios from "axios";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  components: {
    PostRecentPosts,
    PostCategories,
    PostShare,
    PostContent,
    PostInfo,
    PostThumb,
    PostTags
  },
  methods: {

    ...mapActions({
      fetchPostData: 'postData/fetchPostData',
    }),

    ...mapMutations({
      setPostSlug: 'postData/setPostSlug',
    }),
  },

  computed: {
    ...mapState({
      postData: state => state.postData.postData,
      isPostDataLoading: state => state.postData.isPostDataLoading,
    }),
    ...mapGetters({
      getPostData: 'postData/getPostData'
    })
  },

  mounted() {

    this.scrollToTop();
    this.fetchCategories();
    this.setPostSlug(this.$route.params.slug);
    this.fetchPostData();
    // console.log(getPostData)
  },
  // beforeUpdate() {
    //
    // this.scrollToTop();
    // this.fetchCategories();
    // this.setPostSlug(this.$route.params.slug);
    // this.fetchPostData();
    // console.log(getPostData)
  // },
  mixins: [blogMixin]
}
</script>

<style scoped>

</style>
