<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" />
    <br />
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }} - {{ nameOne }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>

    <h2>Watch</h2>
    <input type="text" v-model="searchValue" />
    <p>{{ searchValue }}</p>
    <p>{{ computeSearchValue }}</p>
    <p>{{ matchingNames }}</p>

  <h2>using props in setup()</h2>


  <button @click="isShowPosts = !isShowPosts">{{isShowPosts === true ? "Hide post" : "Show post"}}</button>
  <PostList v-if="isShowPosts" :posts="posts" ></PostList>
 <button @click="posts.pop()">Delete post</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from '../components/PostList.vue'

export default {
  name: "Home",
  components : {PostList},
  setup() {
    let p = ref(null);
    let name = ref("mario");
    let age = ref(30);
    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    let nameOne = ref("nameOne");
    let nameTwo = reactive("nameTwo");

    const handleClick = (e) => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'hello, ninjas'

      name.value = "1234";
      age.value = "100";
    };

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
      nameOne.value = "name one 1";
    };

    // thay đổi thẳng ko cần  xxx.value = 'new value' , nhưng chỉ thay đổi bên trong không thay đỔi giá trị nguyên thủy
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
      nameTwo = "name two 2"; // not working
    };

    ///////////////////////////////////////////////////// watch

    let searchValue = ref("");
    let computeSearchValue = computed(
      () => "computed - day la anh nef em :" + searchValue.value
    );
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const matchingNames = computed(() => {
      // return ['a', 'b', 'c']
      return names.value.filter((name) => name.includes(searchValue.value));
    });

    watch(searchValue, ()=>{
        console.log("watch() ran" + searchValue.value);
    });

    watchEffect(()=>{
        console.log("watchEffect() ran" + searchValue.value);
    });


    /////////////////////////////////////////////////////
    const posts = ref([
      {
        title: "welcome to the blog",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.",
        id: 1,
      },
      { title: "top 5 CSS tips", body: "lorem ipsum", id: 2 },
    ]);

    console.log(p.value);
        
    
    /////////////////////////////////////////////////////
 const isShowPosts = ref(true);

    return {
      
      isShowPosts,
      posts,
      names,
      matchingNames,
      name,
      age,
      handleClick,
      p,
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
      nameOne,
      nameTwo,
      searchValue,
      computeSearchValue,
    };
  },
};
</script>
