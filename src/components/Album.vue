<template>
    <div>
        <h2>{{ albumTypeName }}</h2>
        <hr>
        <span class="album" v-for="album in albums" :key="album.id">
                <b-img class="cursor" :src="album.image" fluid rounded :alt="album.name" @click="clickOnAlbum(album.id)"></b-img>
                <span class="caption">{{ album.name }}</span>
            </span>
    </div>
</template>

<script>
    export default {
        name: "Album",
        props: {
            albumTypeName: {
                type: String,
                required: true,
            },
            albums: {
                type: Array,
                required: true,
            },
        },
        methods: {
            clickOnAlbum(selectedAlbumId) {
                this.$emit('updateAlbumId', selectedAlbumId);
            }
        }
    }
</script>

<style scoped>
    .album {
        width: 200px;
        height: auto;
        vertical-align: top;
        margin-left: 10px;
        display: inline-block;
        text-align: center;
    }
    .caption {
        display: block;
    }
    .cursor {
        cursor: pointer;
    }
</style>