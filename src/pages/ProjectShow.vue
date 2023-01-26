<script>
import axios from 'axios';

export default {
    name: 'ProjectShow',
    data() {
        return {
            proj: {},
            technologies: [],
            loading: false
        }
    },
    created() {
        this.getProject()
    },
    methods: {
        getProject() {
            this.loading = true
            const slug = this.$route.params.slug
            axios
            .get(`http://127.0.0.1:8000/api/projects/${slug}`)
            .then(resp => {
                this.proj = resp.data.results;
                this.loading = false
            })
        }
    },
    computed: {
        getType() {
            return this.proj.type ? this.proj.type.name : 'No Type'
        },

        getTech () {
            console.log(this.proj.technologies.length);
            return this.proj.technologies.length > 0 ? this.proj.technologies : [{name: 'no tech'}]
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-8" v-if="!loading">
                    <h2 class="text-center">{{ proj.title }}</h2>
                    <h5 class="text-center text-primary">{{ getType }}</h5>

                    <span class="text-muted" v-for="tech in getTech">
                        #{{ tech.name }}
                    </span>
                    <p class="mt-3">{{ proj.description }}</p>
                </div>
                <div v-else>
                    no proj
                </div>
            </div>
        </div>
    </main>
</template>

