<template>
  <div id="nav">
<Navbar></Navbar>
  </div>
  <router-view/>
</template>



<script>
import  Navbar  from '../src/components/Navbar.vue'
export default ({

  components : {Navbar},
  setup() {
    
  },
})
</script>


<style>

body {
  background: #e5e2e2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 600px;
  color: #2c3e50;
}

</style>
