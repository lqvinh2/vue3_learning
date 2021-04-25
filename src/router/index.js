import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import CreatePlaylist from "../views/playlists/CreatePlaylist.vue";

import { projectAuth } from "../fireBase/config";

// auth guards
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("current user in auth guard: ", user);
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "Chatroom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
