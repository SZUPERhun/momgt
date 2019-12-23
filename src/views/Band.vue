<template>
    <div class="container">
        <h2>
            {{ band.name }}
        </h2>
        {{ band.text }}
        <p>
            <a class="back" @click="$router.push({ path: '/bands' })">back</a>
        </p>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Band",
        props: {
            id: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                band: {},
            }
        },
        computed: {
            ...mapGetters([
                'getBandById'
            ]),
        },
        mounted() {
            this.band = this.getBandById(this.id);
        },
    }
</script>

<style scoped>
    .back {
        cursor: pointer;
    }
</style>