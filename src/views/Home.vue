<template>
  <div class="home">
    <h1>Home</h1>

    <p v-if="error">{{ error }}</p>
    <div v-if="posts.length" class="layout">
      <PostList v-if="posts.length" :posts="posts"></PostList>
      <TagCloud :posts="posts"></TagCloud>
    </div>
     <div v-else><Spinner /></div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts.js";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
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
