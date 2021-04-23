import { ref } from "vue";
import  {projectFirestore}  from '../fireBase/config'

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 1000);
      // });

      // let data = await fetch("http://localhost:3000/posts");
      // if (!data.ok) {
      //   throw Error("no available data");
      // }
      // posts.value = await data.json();

      console.log(`res`);
      const res = await projectFirestore.collection('posts').get()

      posts.value = res.docs.map(doc => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })



    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
