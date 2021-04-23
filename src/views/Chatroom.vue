<template>
  <div v-if="isShow" class="container">
    <Navbar />
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "../composables/getUser";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    const isShow = computed(() => {
      if (!user.value) {
        isShow = false;
      } else {
        isShow = true;
      }
    });

    // if the user value is ever null, redirect to welcome screen
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
