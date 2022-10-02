<template>

  <footer v-if="optionsData.acf" class="page-footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <div class="page-footer__form">
            <h2 class="wow fadeInUp" data-wow-delay="0.1s" id="footer">{{ optionsData.acf.footer_text1 }}</h2>
            <h3 class="wow fadeInUp" data-wow-delay="0.2s">{{ optionsData.acf.footer_text2 }}</h3>
            <form class="wow fadeInUp" data-wow-delay="0.3s">
              <a href="#" data-toggle="modal" data-target="#sign-up-modal" class="btn btn-blue btn-hover-white">Sign up</a>
            </form>
          </div>
        </div>
        <div class="row justify-content-center justify-content-md-between mx-0">
          <div class="col-8 col-md-7 page-footer__contact-info">
            <ul>
              <li v-html="optionsData.acf.footer_contact1"></li>
              <li v-html="optionsData.acf.footer_contact2"></li>
              <li v-html="optionsData.acf.footer_contact3"></li>
            </ul>
          </div>
          <footer-menu></footer-menu>
          <div class="col-md-5 page-footer__social">
            <div>
              <a href="#"><img src="https://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/youtube-icon.svg" alt="/"></a>
              <a href="#"><img src="https://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/instagram-icon.svg" alt="/"></a>
              <a href="https://www.facebook.com/TravelUnionEU/"><img src="https://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/facebook-icon.svg" alt="/"></a>
              <a href="https://twitter.com/Travel_Union_eu"><img src="https://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/twitter-icon.svg" alt="/"></a>
            </div>
            <div class="copy">© 2019 <strong>TRAVEL UNION</strong>, All right reserved.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import FooterMenu from "@/components/footer/footerMenu";

export default {
  components: {FooterMenu},
  methods: {
    ...mapActions({
      fetchOptionsData: 'optionsData/fetchOptionsData',
    }),
  },

  computed: {
    ...mapState({
      optionsData: state => state.optionsData.optionsData,
      isOptionsDataLoading: state => state.optionsData.isOptionsDataLoading,
    }),
    ...mapGetters({
      getOptionsData: 'optionsData/getOptionsData'
    })
  },

  mounted() {
    this.fetchOptionsData();
  },
}

</script>

<style scoped>
.footer {
  display: block;
}
</style>
