<template>
    <div class="container">
        <div class="row" v-for="i in rowCount" :key="i">
            <div v-for="band in rowItems(i)" class="col-md-4 row-item" :key="band.id">
                <BandIcon :band=band></BandIcon>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import BandIcon from "@/components/BandIcon";

    export default {
        name: "Bands",
        components: {
            BandIcon
        },
        data() {
            return {
                bandsPerRow: 3,
            }
        },
        computed:{
            ...mapGetters([
                'bands'
            ]),
            rowCount() {
                return Math.ceil(this.bands.length / this.bandsPerRow);
            },
        },
        methods: {
            rowItems(i) {
                return this.bands.slice((i - 1) * this.bandsPerRow, i * this.bandsPerRow);
            },
        },
    }
</script>

<style scoped>
    .row-item {
        margin-bottom: 10px;
    }
</style>