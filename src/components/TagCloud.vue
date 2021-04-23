<template>
  <div class="tag-cloud">
    <h1>TAGS</h1>

    <div v-if="tags.length">
   
        <div v-for="tag in tags" :key="tag">
            
            <router-link :to="{ name: 'Tag', params: { tag:tag }}">#{{tag}}</router-link>
        </div>
  
    </div>
    <div v-else><Spinner></Spinner></div>
  </div>
</template>

<script>
import useTags from "../composables/useTag";
import Spinner from "../components/Spinner.vue";

export default {
  props: ["posts"],

  setup(props) {
    const { tags } = useTags(props.posts);
    return { tags };
  },
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: rgb(95, 29, 29);
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
