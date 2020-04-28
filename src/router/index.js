import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/main.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login-page/login.vue"),
  },
  {
    path: "/",
    name: "_home",
    component: Main,
    // redirect:"home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: Main,
    children: [
      {
        path: "/test-el",
        name: "test-el",
        component: () => import("../views/Test.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log("from-to", from, to);
 let token =''
  if (to.name === "_home" && !token) {
    next({ name: "login" });
  } else if(token &&to.name==="_home") {
    next({name:"home"})
  }else if( token && to.name==="login"){
    next({name:"home"})
  }else {
    next()
  }
});

export default router;
