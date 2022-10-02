<template>

  <section v-if="sectionData" id="roadmap" class="roadmap">
    <div class="container">
      <h2 class="text-center">{{ sectionData.title }}</h2>
      <div
          v-if="!isRoadDataLoading"
          class="owl-carousel roadmap-slider"
      >
        <div
            class="roadmap-item"
            v-if="!isRoadDataLoading"
            v-for="roadItem in roadData"
        >
          <div class="bubble">{{ roadItem.title.rendered }}</div>
          <div class="date-circle">
            <span class="month">{{ roadItem.acf.month }}</span>
            <span class="year">{{ roadItem.acf.year }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

import {WOW} from 'wowjs';
import {mapActions, mapGetters, mapState} from "vuex";
export default {
  props: {
    sectionData:{}
  },
  methods: {

    ...mapActions({
      fetchRoadData: 'pageData/fetchRoadData'
    }),
  },
  computed: {
    ...mapState({
      roadData: state => state.pageData.roadData,
      isRoadDataLoading: state => state.pageData.isRoadDataLoading,
    })
  },
  mounted() {
    this.fetchRoadData();
  },
  updated: function () {
    this.$nextTick(function () {
      $('.roadmap-slider.owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        center: true,
        startPosition: 2,
        responsive: {
          0: {
            items: 3,
            margin: 72
          },
          768: {
            items: 5
          }

        }
      });
    })
  }
}
</script>

<style>

</style>