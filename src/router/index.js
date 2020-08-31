import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    props: true,
    component: Home
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //* Magic Comment (network tab) /* webpackChunkName: "about" */
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */
        "../views/DestinationDetails.vue"
      ),
    children: [{
      path: ":experienceSlug",
      name: "ExperienceDetails",
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "ExperienceDetails" */
          "../views/ExperienceDetails.vue"
        )
    }]
  }
];

const router = new VueRouter({
  linkExactActiveClass: "nav-active",
  mode: "history", //removes # in url
  routes
});

export default router;
