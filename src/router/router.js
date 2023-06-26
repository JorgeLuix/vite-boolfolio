import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import Portfolio from "../pages/Portfolio.vue";
import Projects from "../pages/Projects.vue";
// import AboutUs from "../pages/AboutUs.vue";
import ContactUs from "../pages/ContactUs.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/:slug',
            name: 'projects',
            component: Projects
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: AboutUs
        // },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs
        },
       
        //
        {
            path: '/:pathMacht(.*)*',
            name: 'NotFound',
            component: NotFound
        },

    ]
});
export { router };

   
  

