<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Navbar></Navbar>
    <div v-if="projects.length">
        <div v-for="project in projects" :key="project.id">
             <SingleProject :project="project" @delete="HandlseDeleted" @complete="HadleComplete"></SingleProject>
        </div>
    </div>
  
  </div>
</template>

<script>

import SingleProject from "../components/SingleProject.vue"
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar , SingleProject
  },

  data()
  {
      return {
        projects : []
      }
  }, // end data

  mounted(){

    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then((data) => {this.projects = data; console.log(data)})
    .catch(err => console.log(err.message))

  },   // end mounted


  methods:{
    HandlseDeleted(id)
    {
        this.projects = this.projects.filter(project => {
        return project.id !== id
      })
    },

    HadleComplete(id)
    {
         let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete 
    }
  },

}
</script>
