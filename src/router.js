import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectsIndex from "./pages/projects/index.vue";
import ContactsPage from "./components/ContactsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsIndex,
    },
    {
      path: "/contacts",
      name: "AppContacts",
      component: ContactsPage,
    },
  ],
});

export { router };
