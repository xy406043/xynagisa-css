import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routers"

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log("from-to", from, to);
  if (to.name === "_home" ) {
    next({ name: "test-css" });
  }else {
    next()
  }
});

export default router;
