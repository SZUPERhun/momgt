<template>
    <div class="background" :style="{ backgroundImage: `url('${image}')` }">
        <img v-for="name in bandImageNames" :key="name" :src="require('@/assets/' + name)" style="display:none;" alt=""/>
       id: {{ clientId }} <br/>
        secret: {{ clientSecret }} <br/>
        {{ getAuth }}
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Index",
        data() {
            return {
                clientId: process.env.VUE_APP_SPOTIFYID,
                clientSecret: process.env.VUE_APP_SPOTIFYSECRET,
                image: require('@/assets/apey.jpg'),
                time: null,
                i: 1,
            }
        },
        computed: {
            ...mapGetters([
                'bandImageNames'
            ]),
            getAuth() {
                return 'Authorization: Basic ' + btoa(this.clientId + ':' + this.clientSecret);
            },
        },
        methods: {
            intervalBackgroundImage() {
                this.time = setInterval(() => {
                    this.image = require('@/assets/' + this.bandImageNames[this.i++]);
                    if (this.i === this.bandImageNames.length) {
                        this.i = 0;
                    }
                }, 10000);
            },
        },
        created() {
            this.intervalBackgroundImage();
        },
        beforeDestroy() {
            clearInterval(this.time);
        },
    }
</script>

<style scoped>
    .background {
        position: absolute; top: 50px; right: 0; bottom: 0; left: 0;
        width: 100%;
        height: 90%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: aliceblue;
        background-color:#000;
        opacity:0.5;
        display: block;
    }
</style>