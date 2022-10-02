<template>
  <div class="dropdown category-dropdown">
    <button class="dropdown-toggle" type="button" id="catogory-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select a category
    </button>
    <div class="dropdown-menu" aria-labelledby="catogory-dropdown">
      <a class="dropdown-item" href="http://dev.bahamacoders.com/travelunionwp/category/community-environment/">Community &amp; Environment</a>
      <a class="dropdown-item" href="http://dev.bahamacoders.com/travelunionwp/category/finances/">Finances</a>
      <a class="dropdown-item" href="http://dev.bahamacoders.com/travelunionwp/category/finances-et/">Finances</a>
      <a class="dropdown-item" href="http://dev.bahamacoders.com/travelunionwp/category/product-services/">Product &amp; Services</a>
      <a class="dropdown-item" href="http://dev.bahamacoders.com/travelunionwp/category/product-services-et/">Product &amp; Services</a>
      <a class="dropdown-item" href="http://dev.bahamacoders.com/travelunionwp/category/travel/">Travel</a>
      <a class="dropdown-item" href="http://dev.bahamacoders.com/travelunionwp/category/travel-et/">Travel</a>
    </div>
  </div>
  <div class="categories-list">
    <ul>
      <li
          class="cat-item"
          :class="{
                  'current-cat': $route.params.category === undefined
                }"
      >
        <a @click="changePage(1, undefined, undefined)">All</a></li>
      <li
          v-for="category in categories"
          :key="category"
          class="cat-item"
          :class="{
                      'current-cat': $route.params.category === category.slug
                    }"
          @click="changePage(1, category.id, category.slug)"
      >
        <a v-if="category.count > 0" v-html="category.name"></a>
      </li>
    </ul>
  </div>
</template>

<script>
import blogMixin from "@/mixins/blogMixin";

export default {
  mixins: [blogMixin]
}
</script>

<style scoped>

</style>
