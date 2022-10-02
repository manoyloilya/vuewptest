<template>

  <div class="tags"  v-if="postData[0]">
    <a
        v-for="(postTag, index) in postData[0]._embedded.['wp:term'][1]"
        class="tag"
        alt="View all posts in bank"
    >
      <span>{{postTag.name}}</span>
    </a>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {

  computed: {
    ...mapState({
      postData: state => state.postData.postData
    })
  }
}
</script>

<style>

</style>