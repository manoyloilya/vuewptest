<template>
  <img
      width="670"
      height="351"
      class="attachment- blog__post__img size- blog__post__img wp-post-image"
      alt=""
      v-if="getPostData"
      :src="getPostData._embedded.['wp:featuredmedia'][0].source_url"
      loading="lazy"
  >
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {

  computed: {
    ...mapState({
      postData: state => state.postData.postData,
      postSlug: state => state.postData.postSlug,
      isPostDataLoading: state => state.postData.isPostDataLoading,
    }),
    ...mapGetters({
      getPostData: 'postData/getPostData'
    })
  },
  mounted() {
    // console.log(getPostData.id)
  }
}
</script>

<style>
/*-
      :src="postData[0]._embedded.['wp:featuredmedia'][0].media_details.source_url"

      :src="this.$store.state.postData.postData[0]._embedded.['wp:featuredmedia'][0].source_url"
       -*/
</style>