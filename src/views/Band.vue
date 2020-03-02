<template>
    <div class="container">
        <h2>
            {{ band.name }}
        </h2>

        <br/><br/>
            <div class="col-md-12 text">
                <b-img class="img" float :src="require(`@/assets/` + band.id + `.jpg`)"></b-img>
                {{ band.text }}
            </div>

        <br/><br/>

        <Albums :artist-id=getArtistId></Albums>

        <p>
            <a class="cursor" @click="$router.push({ path: '/bands' })">back</a>
        </p>

    </div>
</template>

<script>
    import _ from 'lodash';

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
                return _.last(this.band.links.find(link => link.name === 'Spotify' ).link.split('/'));
            },
        },
        created() {
            this.band = this.getBandById(this.id);
        },
    }
</script>

<style scoped>
    .img {
        display: block;
        width: 50%;
        height: auto;
        float: right;
        margin: 10px;
    }
    .text {
        text-align: justify;
        text-justify: inter-word;
    }
    .cursor {
        cursor: pointer;
    }
</style>