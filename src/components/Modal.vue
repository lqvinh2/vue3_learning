<template>
<div class="backdrop" @click="CloseModal">
    <div class="modal" :class="{ sale:theme === 'sale'}">
        <h1>{{header}}</h1>
        <p>{{title}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: "Modal",
  props: ["header","title", "theme"],
  methods:{
        CloseModal()
        {
            this.$emit('App_CloseModal');
        }
  },
};
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }

    .modal.sale {
background-color: yellow  }
</style>
