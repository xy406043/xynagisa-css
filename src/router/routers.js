const Main = import("../views/main.vue")

const routes = [
  {
    path: "/",
    name: "_home",
    component: Main,
    children:[
      // {
      //   path: "home",
      //   name: "home",
      //   component: () => import("../views/Home.vue"),
      // },
      // {
      //   path: "/article",
      //   name: "article",
      //   component: () => import("../views/article-page/article.vue"),
      //   children: [
      //     {
      //       path: "/article-view",
      //       name: "article-view",
      //       component: () => import("../views/article-page/article-view.vue"),
      //     },
      //   ],
      // },

    ]
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/boot",
    name: "boot",
    component:() => import("../views/single-page/boot.vue")
  },
  {
    path:"/css",
    name:"css",
    // redirect:"test-animation",
    component:() => import("../views/test/index.vue"),
    children:[
      {
        path:"/test-css",
        name:"test-css",
        component: () =>import("../views/test/css.vue")
      },
      {
        path:"/test-animation",
        name:"test-animation",
        component: () =>import("../views/test/animation.vue")
      },
      {
        path:"/test-grid",
        name:"test-grid",
        component: () =>import("../views/test/grid.vue")
      },
      {
        path:"/test-special",
        name:"test-special",
        component: () =>import("../views/test/special.vue")
      },
      {
        path:"/test-gradual",
        name:"test-gradual",
        component: () =>import("../views/test/gradual.vue")
      },

    ]
  }
];
export default routes;
