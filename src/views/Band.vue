<template>
    <div class="container">
        <h2>
            {{ band.name }}
        </h2>

        <br/><br/>

        {{ band.text }}

        <br/><br/>

        <Albums :artist-id=getArtistId></Albums>

        <p>
            <a class="back" @click="$router.push({ path: '/bands' })">back</a>
        </p>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Albums from "@/components/Albums";

    export default {
        name: "Band",
        components: {
            Albums
        },
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
            getArtistId() {
                return this._.last(this.band.links.find(link => link.name === 'Spotify' ).link.split('/'));
            },
        },
        created() {
            this.band = this.getBandById(this.id);
        },
    }
</script>

<style scoped>
    .back {
        cursor: pointer;
    }
</style>