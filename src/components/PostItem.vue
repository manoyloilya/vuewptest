<template :key="post.id">
  <div :key="post.id" :id="'post-' + post.id" class=" col-12 col-md-6 col-lg-4 col-xl post-329 post ">
    <div class="blog__post">
      <a @click="$router.push('/posts/' + post.slug)" class="blog__post__img">
        <img
          width="670"
          height="351"
          :src="post._embedded.['wp:featuredmedia'][0].media_details.sizes.full.source_url"
          class="attachment- blog__post__img size- blog__post__img wp-post-image"
          alt=""
        >
      </a>
      <div class="blog__post__content">
        <div class="mb-md-auto">
          <a @click="$router.push('/posts/' + post.slug)">
            <h3>{{post.title.rendered}}</h3>
          </a>
          <div v-if="post._embedded.['wp:term'][0].length > 0" class="categories">
            <a
                v-for="(postCategory, index) in post._embedded.['wp:term'][0]"
                class="category"
                href="http://dev.bahamacoders.com/travelunionwp/category/finances/"
                alt="View all posts in Finances"
            >
              <span v-html="postCategory.name"></span>

              <span v-if="(index + 1) < post._embedded.['wp:term'][0].length">,&nbsp</span>
            </a>
          </div>
          <div v-html="post.excerpt.rendered"></div>
        </div>
        <div class="info">
          <span class="post-autor"><span class="post-autor--image"><img
              src="http://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/icon-user.png"
              alt="/"></span>{{ post._embedded.author[0].name }}</span>
          <span class="post-date">{{ post.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {

    ...mapActions({
      fetchPostData: 'postData/fetchPostData',
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
}
</script>

<style scoped>

</style>
