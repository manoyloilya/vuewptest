<template>
  <div class="col-md-12 page-footer__nav">
    <ul
        id="menu-footer-menu"
        class=" "
    >
      <li
          id="menu-item-207"
          class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-207"
          v-if="!isFooterMenuLoading"
          v-for="menuItem in footerMenu"
      >
        <a :href="menuItem.url" aria-current="page">{{ menuItem.post_title }}</a>
      </li>

    </ul>
  </div>
</template>


<script>

import {mapActions, mapState} from "vuex";

export default {
  methods: {

    ...mapActions({
      fetchFooterMenuData: 'footerMenuData/fetchFooterMenuData'
    }),
  },
  computed: {
    ...mapState({
      footerMenu: state => state.footerMenuData.footerMenuData,
      isFooterMenuLoading: state => state.footerMenuData.isFooterMenuLoading,
    })
  },
  mounted() {
    this.fetchFooterMenuData();

  }
}

</script>

<style scoped>
.footer {
  display: block;
}
</style>