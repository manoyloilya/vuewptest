<template>
  <component
      v-for="component in pageData[0].acf.blocks"
      :is="'section-' + component.acf_fc_layout.replace(/_/g, '-')"
      v-if="pageData[0]"
      :sectionData="component"
  >
    <div v-html="'section-' + component.acf_fc_layout.replace(/_/g, '-')"></div>
  </component>

</template>

<script>

import sectionBanner from "@/components/sections/sectionBanner";
import sectionFeatures from "@/components/sections/sectionFeatures";
import sectionAbout from "@/components/sections/sectionAbout";
import sectionTravel from "@/components/sections/sectionTravel";
import sectionOurTeam from "@/components/sections/sectionOurTeam";
import sectionRoadmap from "@/components/sections/sectionRoadmap";
import sectionEnvironment from "@/components/sections/sectionEnvironment";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  components: {
    sectionBanner,
    sectionFeatures,
    sectionAbout,
    sectionTravel,
    sectionOurTeam,
    sectionRoadmap,
    sectionEnvironment,
  },
  methods: {

    ...mapActions({
      fetchPageData: 'pageData/fetchPageData',
    }),

    ...mapMutations({
      setPageSlug: 'pageData/setPageSlug',
    }),

  },

  computed: {
    ...mapState({
      pageData: state => state.pageData.pageData,
      isPageDataLoading: state => state.pageData.isPageDataLoading,
    }),
    ...mapGetters({
      getPageData: 'pageData/getPageData'
    })
  },

  mounted() {

    this.setPageSlug('home');
    this.fetchPageData();
  },
}
</script>

<style scoped>

</style>
