import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectsList from './pages/ProjectsList.vue';

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
    ]
});

export { router };