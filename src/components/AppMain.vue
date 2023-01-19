<script>
import axios from 'axios';

export default {

    name: 'AppMain',
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
                <div class="col-7" v-for="proj in projects">
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title text-center">{{proj.title}}</h5>
                            <h6 v-if="proj.type" class="card-subtitle mb-2 text-primary text-center">{{ proj.type.name  }}</h6>
                            <h6 v-else class="card-subtitle mb-2 text-primary text-center">No Type</h6>
                            <span v-for="tech in proj.technologies" class="card-subtitles text-muted"> #{{ tech.name }}</span>
                            <p class="card-text">{{ proj.description }}</p>
                            <a href="#" class="card-link btn btn-primary">See Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>