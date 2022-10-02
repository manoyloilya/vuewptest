<template>
  <header class="page-header">
    <div class="container">
      <div class="row justify-content-between justify-content-md-end align-items-md-center">
        <a  @click="$router.push('/')" class="page-header__logo mr-md-auto">
          <img class="page-header__logo page-header__logo--mob" src="http://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/logo.svg" alt="">
          <img class="page-header__logo page-header__logo--tablet" src="http://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/logo-tablet.svg" alt="">
          <img class="page-header__logo page-header__logo--fixed" src="http://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/logo-fixed.svg" alt="">
          <img class="page-header__logo page-header__logo--fixed-desk" src="http://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp/img/logo-fixed-desk.svg" alt="">
        </a>
        <div class="page-header__right-nav">
          <button class="page-header__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="page-header__nav-block">
          <nav class="page-header__nav">
            <ul id="menu-menu-1" class="page-header__nav-main"><li id="menu-item-127" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-127"><a href="/travelunionwp/#about">About</a></li>
              <li id="menu-item-128" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-128"><a href="/travelunionwp/#team">Our Team</a></li>
              <li id="menu-item-129" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-129"><a href="/travelunionwp/#roadmap">Roadmap</a></li>
              <li id="menu-item-369" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-262 current_page_item current_page_parent menu-item-369"><a @click="$router.push('/blog')"  aria-current="page">Blog</a></li>
              <li id="menu-item-131" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-131"><a href="/travelunionwp/#footer">Contacts</a></li>
              <li id="menu-item-372" class="btn btn-white open-modal-signup menu-item menu-item-type-custom menu-item-object-custom menu-item-372"><a href="#" data-toggle="modal" data-target="#sign-up-modal">Sign Up</a></li>
            </ul>                    </nav>
          <a href="#" data-toggle="modal" data-target="#sign-up-modal" class="btn btn-blue">Sign up</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
