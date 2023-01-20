<script>
export default {
    name: 'ProjectCard',
    props: {
        proj: Object
    },
}
</script>

<template>
    <div class="col-7" >
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">{{ proj.title }}</h5>
                <h6 v-if="proj.type" class="card-subtitle mb-2 text-primary text-center">{{ proj.type.name }}</h6>
                <h6 v-else class="card-subtitle mb-2 text-primary text-center">No Type</h6>
                <span v-for="tech in proj.technologies" :key="tech.id" class="card-subtitles text-muted"> #{{ tech.name }}</span>
                <p class="card-text">{{ proj.description }}</p>
                <a href="#" class="card-link btn btn-primary">See Project</a>
            </div>
        </div>
    </div>
</template>

