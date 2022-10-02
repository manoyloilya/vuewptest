<template>
  <navbar></navbar>
  <div id="content" class="site-content">
    <page-title></page-title>
    <router-view :key="$route.path"></router-view>
  </div>
  <sitefooter></sitefooter>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sitefooter from "@/components/footer/Sitefooter";
import PageTitle from "@/components/PageTitle";

export default {
  components: {
    PageTitle,
    Navbar,
    Sitefooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  /*padding: 20px;*/
}
</style>
