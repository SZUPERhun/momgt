<template>
    <div class="card" @click="goLink(concert.link)">
        <p> {{ concert.name }}</p>
        <p> {{ concert.date }}</p>
    </div>
</template>

<script>
    export default {
        name: "ConcertCard",
        props: {
            concert: {
                type: Object,
                required: true,
            }
        },
        methods: {
            goLink(link) {
                window.location = link;
            }
        },
    }
</script>

<style scoped>
    .card {
        border-radius: 25px;
        border: 2px solid black;
        padding: 20px;
        cursor: pointer;
    }
</style>