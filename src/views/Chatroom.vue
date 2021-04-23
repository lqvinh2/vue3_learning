<template>
  <div class="container">
    <Navbar />
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "../composables/getUser";
import { computed, watch, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    const isShow = ref(false);

    // if the user value is ever null, redirect to welcome screen
    watch(user, () => {
      if (!user.value) {
        //router.push({ name: "Welcome" });
        isShow.value = false;
      } else {
        isShow.value = true;
      }
    });

    return { isShow };
  },
};
</script>

<style></style>
