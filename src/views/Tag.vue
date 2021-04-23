<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="postsWithTag" />
        <TagCloud :posts="posts"></TagCloud>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts.js";
import { useRoute } from "vue-router";
import { computed } from 'vue';
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "Tag",
  components: { PostList, Spinner , TagCloud},
  setup() {
    const { posts, error, load } = getPosts();
    const router = useRoute();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(router.params.tag));
    });

    return { error, posts , postsWithTag};
  },
};
</script>

<style></style>
