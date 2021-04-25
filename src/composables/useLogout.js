import { ref } from "vue";
import { projectAuth } from "../fireBase/config";

// refs
const error = ref(null);
const isPending = ref(false);

// logout function
const logout = async () => {
  error.value = null;

  try {
    await projectAuth.signOut();
    isPending.value = false;
  } catch (err) {
    error.value = err.message;
    isPending.value = false;
  }
};

const useLogout = () => {
  return { error, logout, isPending };
};

export default useLogout;
