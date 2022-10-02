<template>

  <section v-if="sectionData" id="about" class="page-section about-product">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 page-section__content">
          <h2 class="wow fadeInUp" data-wow-offset="100">{{ sectionData.title }}</h2>
          <p class="wow fadeInUp" data-wow-offset="100">{{ sectionData.text }}</p>
          <h3 class="wow fadeInUp" data-wow-offset="100">{{ sectionData.subtitle }}</h3>
          <p class="d-none d-md-block wow fadeInUp" data-wow-offset="100">{{ sectionData.subtext }}</p>
          <form>
            <a href="#" data-toggle="modal" data-target="#sign-up-modal" class="btn btn-blue wow flipInX" data-wow-offset="100">{{ sectionData.button_text }}</a>
          </form>
        </div>
        <div class="col-10 col-md-6 page-section__img">
          <img class="img--phone wow fadeInUpMedium" :src="this.$store.state.themeUrl + '/img/phone-1.png'" data-wow-delay="0.1s" alt="/">
          <img class="img--star wow aboutStar" :src="this.$store.state.themeUrl + '/img/star.png'" data-wow-delay="1s" data-wow-duration="0.6s" alt="/">
          <img class="img--card wow aboutCard1" data-wow-delay="0.5s" :src="this.$store.state.themeUrl + '/img/card-1.png'" alt="/">
          <img class="img--card-two wow aboutCard2" data-wow-delay="0.5s" :src="this.$store.state.themeUrl + '/img/card-2.png'" alt="/">
        </div>
      </div>
    </div>
  </section>

  <section class="section-features wow fadeInUp">
    <div class="container">
      <div class="row">


        <div
            class="col-md-4 text-center wow fadeInUp"
            data-wow-offset="300"
            :data-wow-delay="feature.delay"
            v-for="feature in sectionData.feature"
        >
          <div class="feature">
            <div class="feature__img">
              <img :src="feature.icon" alt="/">
            </div>
            <h5>{{feature.title}}</h5>
            <h3>{{feature.text}}</h3>
          </div>
        </div>


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