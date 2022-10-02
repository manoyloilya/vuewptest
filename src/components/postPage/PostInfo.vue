<template>
  <div class="info" v-if="postData[0]">
    <span class="post-autor">
      <span class="post-autor--image">
        <img src="https://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/icon-user.png" alt="/">
      </span>
      {{postData[0]._embedded.author[0].name}}
    </span>
    <span class="post-date">{{postData[0].date_gmt}}</span>
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