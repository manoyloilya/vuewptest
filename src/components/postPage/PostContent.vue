<template>
  <div
      class="post-content"
      v-if="postData[0]"
      v-html="postData[0].content.rendered"
      :key="postData[0].id"
  >

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