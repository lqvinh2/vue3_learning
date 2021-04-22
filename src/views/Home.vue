<template>
  <div class="home">
    <h1>Home</h1>

    <p v-if="error">{{ error }}</p>
    <PostList v-if="posts.length" :posts="posts"></PostList>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts.js";

export default {
  name: "Home",
  components: { PostList, Spinner },
  setup() {
    const isShowPosts = ref(true);
    const { posts, error, load } = getPosts();

    load();

    return {
      error,
      posts,
      isShowPosts,
    };
  },
};
</script>
