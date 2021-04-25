import { ref } from "vue";
import { projectAuth } from "../fireBase/config";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;
  try {
    // INTERNAL TIMER MAY CAUSE EXTRA ERROR IN THE CONSOLE WHEN USING AWAIT
    // FIREBASE WILL OVERHAUL IN THE FUTURE & EVERYTHING STILL WORKS
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    isPending.value = false;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = "Incorrect login credentials";
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, login, isPending };
};

export default useLogin;
