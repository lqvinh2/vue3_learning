<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{titleApp}}</h1>

  <div class="" v-if="isShowModal">
     <Modal :title="title" :header="header" theme="sale" @App_CloseModal="ToogleModal"/>
  </div>

  <button type="button" class="btn btn-secondary" @click.left="ToogleModal">Show modal</button>
 
</template>

<script>
import Modal from "./components/Modal.vue";


export default {
  name: "App",

  data(){
    return{
    titleApp : "app title yeye",
    title : "app title yeye",
    header : "modal header",
    isShowModal:false

  }},

  methods:{
    ToogleModal()
    {
      this.isShowModal = !this.isShowModal;
    }
  },


  components: {
    Modal
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
