<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
    <br />
    <div v-if="success">Your account [{{ email }}] is created !</div>
  </form>
</template>

<script>
// using @ means start at the project src root
import useSignup from "../../composables/useSignup";

import { ref } from "vue";
import { tr } from "date-fns/locale";

export default {
  setup() {
    const { error, signup, isPending } = useSignup();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");
    const success = ref(false);

    const handleSubmit = async () => {
      success.value = false;
      const res = await signup(email.value, password.value, displayName.value);

      if (!error.value) {
        success.value = true;
        setTimeout(() => {
          success.value = false;
        }, 3000);
      }
    };

    return {
      email,
      password,
      displayName,
      handleSubmit,
      error,
      isPending,
      success,
    };
  },
};
</script>
