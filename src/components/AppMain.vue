<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {

    name: 'AppMain',
    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: [],
        }
    },
    created() {
        this.getProjects()

    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects').then(resp => {
                this.projects = resp.data.results
                console.log(this.projects)
            })
        }
    }
}
</script>

<template>
    <main class="mt-5">
        <div class="container">
            <div class="row justify-content-center gy-2">
                <ProjectCard v-for="project in projects" :proj="project" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>