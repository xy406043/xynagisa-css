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
      {
        path:"/test-animation2",
        name:"test-animation2",
        component: () =>import("../views/test/real-animation.vue")
      },
      {
        path:"/test-shadow",
        name:"test-shadow",
        component: () =>import("../views/test/shadow.vue")
      },
      {
        path:"/test-pseudo",
        name:"test-pseudo",
        component: () =>import("../views/test/pseudo-elements.vue")
      },
      {
        path:"/test-filter",
        name:"test-filter",
        component: () =>import("../views/test/filter.vue")
      },
      {
        path:"/test-border",
        name:"test-border",
        component: () =>import("../views/test/border.vue")
      },
      {
        path:"/test-mixin",
        name:"test-mixin",
        component: () =>import("../views/test/mixin.vue")
      },
      {
        path:"/test-media",
        name:"test-media",
        component: () =>import("../views/test/media.vue")
      },
      {
        path:"/test-multiple",
        name:"test-multiple",
        component: () =>import("../views/test/multiple.vue")
      },
      {
        path:"/test-3d",
        name:"test-3d",
        component: () =>import("../views/test/3d.vue")
      },
      {
        path:"/test-clip",
        name:"test-clip",
        component: () =>import("../views/test/clip.vue")
      },
       {
        path:"/test-text",
        name:"test-text",
        component: () =>import("../views/test/text.vue")
      },

    ]
  }
];
export default routes;
