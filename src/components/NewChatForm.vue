<template>
  <h1>NewChatForm.vue</h1>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>

    <div v-if="error" class="error">{{ error }} blah</div>
  </form>
</template>

<script>
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../fireBase/config";
import { ref } from "vue";

export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");

    // refs
    const message = ref("");

    const handleSubmit = async () => {
      const chatDoc = {
        name: user.value.displayName,
        email: user.value.email,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chatDoc);

      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
