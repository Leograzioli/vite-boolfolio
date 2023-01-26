<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {

    name: 'ProjectList',
    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: null

        }
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(page) {
            const params = {
                page
            }

            axios.get('http://127.0.0.1:8000/api/projects', { params }).then(resp => {
                this.projects = resp.data.results.data
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                console.log(resp.data);
            })
        }
    }
}
</script>

<template>
    <main class="mt-5">
        <div class="container bg-primary-subtle py-5">
            <div v-if="projects.length > 0" class="row justify-content-center gy-2">
                <ProjectCard v-for="project in projects" :proj="project" />
            </div>
            <h2 v-else class="text-center my-5">
                no projects to show
            </h2>
            <div class="d-flex justify-content-center mt-4">
                <a class="btn btn-success me-3" :class="currentPage === 1 ? 'disabled' : '' " @click.prevent="getProjects(currentPage - 1)">Prev</a>
                <div class="text-white bg-success px-2 align-self-center">{{ currentPage }}</div>
                <a class="btn btn-success ms-3" :class="currentPage === lastPage ? 'disabled' : '' " @click.prevent="getProjects(currentPage + 1)">Next</a>
            </div>
        </div>
    </main>
</template>