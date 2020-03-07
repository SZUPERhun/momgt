<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <Album album-type-name="Albums" :albums="getAlbums" @updateAlbumId="updateActiveAlbumId"></Album>
                <br/>
                <Album album-type-name="Singles" :albums="getSingles" @updateAlbumId="updateActiveAlbumId"></Album>
            </div>
            <iframe v-if="activeAlbumId" :src="`https://open.spotify.com/embed/album/${ activeAlbumId }`"
                    width="350"
                    height="300"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
            </iframe>
        </div>
    </div>
</template>

<script>
    import Album from "@/components/Album";

    export default {
        name: "Albums",
        components: {
            Album
        },
        props: {
            artistId: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                albums: [],
                clientId: process.env.VUE_APP_SPOTIFYID,
                clientSecret: process.env.VUE_APP_SPOTIFYSECRET,
                accessToken: '',
                tokenType: '',
                activeAlbumId: null,
            }
        },
        computed: {
            getClientCredential() {
                return new Buffer(this.clientId + ':' + this.clientSecret).toString('base64');
            },
            getAlbums() {
                return this.albums.filter(album => album.type === 'album');
            },
            getSingles() {
                return this.albums.filter(album => album.type === 'single');
            },
        },
        async mounted() {
            this.getAlbumData(this.artistId);
        },
        methods: {
            updateActiveAlbumId(albumId) {
                if (this.activeAlbumId === albumId) {
                    this.activeAlbumId = null;
                    return;
                }
                this.activeAlbumId = albumId;
            },
            async getAlbumData(artistId) {
                return await this.axios.post('https://accounts.spotify.com/api/token', null, {
                    params: {
                        grant_type: 'client_credentials',
                    },
                    headers: {
                        'Authorization': 'Basic ' + this.getClientCredential,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }).then( res => {
                    this.axios.get('https://api.spotify.com/v1/artists/' + artistId +'/albums',{
                        params: {
                            include_groups : 'album,single',
                        },
                        headers: {
                            'Authorization': 'Bearer ' + res.data.access_token,
                        },
                    }).then( res => {
                        this.processAlbumData(res.data);
                    }).catch( err => {
                        console.log(err);
                    });
                }).catch( err => {
                    console.log(err);
                });
            },
            processAlbumData(data) {
                data.items.forEach(album => {
                    this.albums.push({
                        id: album.id,
                        name: album.name,
                        type: album.album_group,
                        image: album.images[1].url,
                        releaseDate: album.release_date,
                    });
                });
            },
        }
    }
</script>

<style scoped>

</style>