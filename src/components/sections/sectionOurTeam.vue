<template>
  <section v-if="sectionData" class="our-team">
    <div id="team"></div>
    <div class="container">
      <img  :src="this.$store.state.themeUrl + '/img/man1.svg'" alt="" class="superman1 wow superman1animation" data-wow-duration="3s" data-wow-delay="1s">
      <img  :src="this.$store.state.themeUrl + '/img/man2.svg'" alt="" class="superman2 wow superman2animation" data-wow-duration="2.5s" data-wow-delay="1.5s">
      <img  :src="this.$store.state.themeUrl + '/img/man3.svg'" alt="" class="superman3 wow superman3animation" data-wow-duration="3s" data-wow-delay="1.7s">
      <div class="text-center">
        <h2>{{ sectionData.title }}</h2>
        <div v-html="sectionData.text"></div>
      </div>
      <div class="row d-md-none justify-content-center">
        <div class="col-10 px-2">
          <div class="owl-carousel owl-theme">

            <div
                class="item"
                v-if="!isTeamDataLoading"
                v-for="member in teamData"
            >
              <div class="team-member">
                <div class="team-member__img">
<!--                  <img :src="member._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" alt="">-->
                </div>
                <h6>{{ member.title.rendered}}</h6>
                <span class="position">{{ member.acf.position}}</span>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="row d-none d-md-flex justify-content-center our-team__desktop">


        <div
            class="col-md"
            v-if="!isTeamDataLoading"
            v-for="member in teamData"
        >
          <div class="team-member wow teamMemberAnimation" data-wow-delay="0s"  data-wow-duration="0.5s">
            <div class="team-member__img">
              <img v-if="member" :src="member._embedded.['wp:featuredmedia'][0].media_details.sizes.full.source_url" alt="">
              <div class="imgborder wow teamMemberImgAnimation"  data-wow-duration="0.7s" data-wow-delay="0s"></div>
            </div>
            <h6>{{ member.title.rendered}}</h6>
            <span class="position">{{ member.acf.position}}</span>
          </div>
        </div>

      </div>
      <div class="our-team__content">
        <div v-html="sectionData.bottom_text"></div>
        <a href="#" data-toggle="modal" data-target="#contact-modal" class="btn btn-blue btn-hover-white wow fadeInUp"  data-wow-delay="0.3s">{{sectionData.button_text}}</a>
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
      fetchTeamData: 'pageData/fetchTeamData'
    }),
  },
  computed: {
    ...mapState({
      teamData: state => state.pageData.teamData,
      isTeamDataLoading: state => state.pageData.isTeamDataLoading,
    })
  },
  mounted() {
    this.fetchTeamData();

  }
}
</script>

<style>

</style>