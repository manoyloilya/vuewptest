<template>
  <section v-if="sectionData" class="section-features wow fadeInUp">
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