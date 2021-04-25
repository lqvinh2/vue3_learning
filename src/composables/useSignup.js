import { ref } from "vue";
import { projectAuth } from "../fireBase/config";

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);
const isPending = ref(false);
const signup = async (email, password, displayName) => {
  error.value = null;
  isPending.value = true;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      isPending.value = false;
      throw new Error("Could not complete signup");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, signup, isPending };
};

export default useSignup;
