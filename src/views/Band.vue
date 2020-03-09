<template>
    <div class="container">
        <h2>
            {{ band.name }}
        </h2>

        <br/><br/>

        <div class="text">
            <b-img class="img" float :src="require(`@/assets/` + band.id + `.jpg`)"></b-img>
            {{ band.text }}
        </div>

        {{ getBandImages }}

        <vue-flux
                :options="vfOptions"
                :images="vfImages"
                :transitions="vfTransitions"
                :captions="vfCaptions"
                ref="slider">

            <template v-slot:preloader>
                <flux-preloader />
            </template>

            <template v-slot:pagination>
                <flux-pagination />
            </template>

            <template v-slot:index>
                <flux-index />
            </template>
        </vue-flux>

        <br/><br/>

        <Albums :artist-id=getArtistId></Albums>

        <br/><br/>

        <p>
            <a class="cursor" @click="$router.push({ path: '/bands' })">back</a>
        </p>

    </div>
</template>

<script>
    import _ from 'lodash';
    import {
        VueFlux,
        FluxCaption,
        FluxControls,
        FluxIndex,
        FluxPagination,
        FluxPreloader,
    } from 'vue-flux';

    import { mapGetters } from 'vuex';
    import Albums from "@/components/Albums";

    export default {
        name: "Band",
        components: {
            Albums,
            VueFlux,
            FluxCaption,
            FluxControls,
            FluxIndex,
            FluxPagination,
            FluxPreloader,
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
                vfOptions: {
                    autoplay: true
                },
                vfImages: [
                    require('@/assets/apey/Apey fotó 2 (credit_ Bodnár Dávid).jpg'),
                    require('@/assets/apey/Apey photo (credit_ Horpáczi Dávid).jpg'),
                    require('@/assets/apey/Apey photo live (crdit_ Bodnár Dávid).jpg'),
                    require('@/assets/apey/apey_bppark_052.jpg'),
                    require('@/assets/apey/credit_ bodnar david.jpg.jpg'),
                    require('@/assets/apey/credit_ bodnar david.jpg-2.jpg'),
                    require('@/assets/apey/credit_ bodnar david.jpg-4.jpg'),
                    require('@/assets/apey/credit_ bodnar david.jpg-5.jpg'),
                    require('@/assets/apey/Áron András fotó (credit_Bodnár Dávid).jpg'),
                ],
                vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
                vfCaptions: [
                    'Caption for image 1',
                    'Caption for image 2',
                    'Caption for image 3',
                ],
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