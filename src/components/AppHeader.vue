<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            links: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'About-us',
                    routeName: 'about',
                },
                {
                    label: 'Projects',
                    routeName: 'projects',
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand px-5" href="#">BoolPress</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="http://127.0.0.1:8000/admin">Admin</a>
                    </li>
                    <li v-for="(link, i) in links" :key="i" class="nav-item">
                        <router-link class="nav-link" :to="{ name: link.routeName }"> {{link.label}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>