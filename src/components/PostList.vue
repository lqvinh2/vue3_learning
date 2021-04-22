<template>
  <div v-for="p in posts" :key="p.id">
     <SinglePost :post="p"></SinglePost>
  </div>
</template>


<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'

import SinglePost from '../components/SinglePost.vue'
export default {
    name : "PostList",
    components : {SinglePost},
      props: ['posts'],

   setup(props) {
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component unmounted'))
    onUpdated(() => console.log('component updated'))
  }

}
</script>

<style>

</style>