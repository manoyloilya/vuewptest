<template>
    <section v-if="sectionData" class="hero hero--home">
      <img :src="this.$store.state.themeUrl + '/images/hero-mob.png'" class="hero__img hero__img--mob" alt="/">
      <img :src="this.$store.state.themeUrl + '/images/hero-tablet.png'" class="hero__img hero__img--tablet" alt="/">
      <img :src="this.$store.state.themeUrl + '/images/hero-desktop3.png'" class="hero__img hero__img--desktop" alt="/">
      <div class="container">
        <div class="hero__wrap">
          <div class="row justify-content-center">
            <div class="col-8 col-md-5 col-lg-4 px-0">
              <div class="hero__phone">
                <img class="hero__phone--back wow fadeInLeft" data-wow-delay="0.3s" :src="this.$store.state.themeUrl + '/img/mobile-back.png'" alt="/">
                <img class="hero__phone--shadow wow fadeIn" data-wow-delay="0.5s" :src="this.$store.state.themeUrl + '/img/shadow.png'" alt="/">
                <img class="hero__phone--card wow rotateCard" data-wow-delay="0.7s" data-wow-duration="0.7s" :src="this.$store.state.themeUrl + '/img/card.png'" alt="/">
                <img class="phone wow fadeInUpMedium" data-wow-delay="0s" :src="this.$store.state.themeUrl + '/img/mobile.png'" alt="/">
              </div>
            </div>
            <div class="col-10 col-md-7 col-lg-8 px-0">
              <div class="hero__content">
                <h2 class="wow fadeInUp" data-wow-delay="0s">{{ sectionData.title1 }}</h2>
                <h1 class="wow fadeInUp" data-wow-delay="0.25s">{{ sectionData.subtitle }}</h1>
                <p class="wow fadeInUp" data-wow-delay="0.5s">{{ sectionData.text }}</p>
                <p class="d-none d-md-block wow fadeInUp" data-wow-delay="0.75s">{{ sectionData.text_2 }}</p>
                <form class="">
                  <a href="#" data-toggle="modal" data-target="#sign-up-modal" class="btn btn-blue btn-hover-white wow flipInX" data-wow-delay="1s">{{ sectionData.button_text }}</a>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>

<script>

import {WOW} from 'wowjs';
export default {
  props: {
    sectionData:{}
  },
  mounted() {
    new WOW().init();

  }
}
</script>

<style>

</style>