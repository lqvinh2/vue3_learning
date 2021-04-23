<template>
  <h1>DETAIL</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>

    <div v-for="tag in post.tags" :key="tag">#{{ tag }}</div>
  </div>
  <div v-else><Spinner /></div>

  <button @click="HandleDelete">DELETE POST</button>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";

import { routerKey, useRoute, useRouter } from "vue-router";
import { projectFirestore } from "../fireBase/config";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    // const { error, post, load } = getPost(props.id); // it is ok but also do like below using route.params.id
    const { error, post, load } = getPost(route.params.id);

    load();

    const HandleDelete = () => {
      try {
        const res = projectFirestore
          .collection("posts")
          .doc(props.id)
          .delete();
        router.push({ name: "Home" });
      } catch (error) {}
    };

    return { error, post, HandleDelete };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
