<script>
export default {
    name: 'ProjectCard',
    props: {
        proj: Object
    },
    data () {
        return {
            maxLength: 150
        }
    },
    computed: {
        descriptionLenght () {
            if (this.proj.description && this.proj.description.length > this.maxLength) {
                return this.proj.description.substring(0, this.maxLength) + '...';
            }
            return this.proj.description
        }
    }
}
</script>

<template>
    <div class="col-7" >
        <div class="card">
            <div class="card-body">
                <div class="px-5">
                    <h5 class="card-title text-center">{{ proj.title }}</h5>
                    <h6 v-if="proj.type" class="card-subtitle mb-2 text-primary text-center">{{ proj.type.name }}</h6>
                    <h6 v-else class="card-subtitle mb-2 text-primary text-center">No Type</h6>
                    <span v-for="tech in proj.technologies" :key="tech.id" class="card-subtitles text-muted"> #{{ tech.name }}</span>
                    <p class="card-text text-center py-3">{{ descriptionLenght }}</p>
                    <div class="d-flex justify-content-center">
                        <router-link :to=" {name: 'show-projects', params: {slug: proj.slug}}" class="card-link btn btn-primary my-3">See Project</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

