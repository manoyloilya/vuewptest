<template>
  <section v-if="sectionData" class="text-block text-center">
    <div class="container">
      <img class="text-block__img wow fadeInUpMedium" :src="this.$store.state.themeUrl + '/img/tree.png'" alt="/">
      <div class="text-block__content">
        <h2 class="wow fadeInUp" data-wow-delay="0.1s" v-html="sectionData.title"></h2>
        <h3 class="wow fadeInUp" data-wow-delay="0.2s" v-html="sectionData.subtitle"></h3>
        <div v-html="sectionData.text"></div>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  props: {
    sectionData:{}
  }
}
</script>

<style>

</style>