<template>
    <div>
        <router-link :to="{ name: 'band', params: { id: band.id, band: band }}">
            <div class="pic">
                <b-img class="img" :src="require(`@/assets/clownpepe.jpg`)" fluid rounded :alt="band.name"></b-img>
                <div class="overlay"></div>
                <div class="info">
                    <p>{{ band.name }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "BandIcon",
        props: {
            band: {
                type: Object,
                required: true,
            }
        },
    }
</script>

<style scoped>
    .img {
        max-width: 100%;
    }

    .pic {
        position: relative;
        display: inline-block;
        background: url(http://farm2.staticflickr.com/1486/23990047223_5b7a0c82e8_b.jpg);
        margin-bottom: 10px;
    }

    .pic:hover > .overlay {
        position: absolute;
        top: 0;
        width:100%;
        height:100%;
        left: 0;
        background-color:#000;
        opacity:0.5;
        z-index: 100;
        display: block;
        text-align: center;
    }

    .info {
        position: absolute;
        bottom: 20px;
        right: 200px;
        color: white;
    }
</style>