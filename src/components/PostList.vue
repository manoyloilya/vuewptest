<template>
  <div v-if="posts.length > 0">

    <div class="row">
      <transition-group name="user-list">
          <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
          />
      </transition-group>
    </div>
  </div>
  <h2 v-else style="color: red">
    Список пользователей пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
