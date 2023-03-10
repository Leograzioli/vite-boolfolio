import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectShow from './pages/ProjectShow.vue'
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'show-projects',
            component: ProjectShow
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },
    ]
});

export { router };