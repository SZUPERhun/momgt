<template>
    <div>
        <div v-for="album in getAlbums" :key="album.id" >
            <b-img class="img" :src="album.image" fluid rounded :alt="album.name"></b-img>
            <iframe :src="`https://open.spotify.com/embed/album/${album.id}`"
                    width="400"
                    height="230"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
            </iframe>
        </div>

        <br/>

        <div v-for="single in getSingles" :key="single.id" >
            <b-img class="img" :src="single.image" fluid rounded :alt="single.name"></b-img>
            <iframe :src="`https://open.spotify.com/embed/album/${single.id}`"
                    width="400"
                    height="230"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
            </iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Albums",
        props: {
            artistId: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                albums: [],
                clientId: process.env.VUE_APP_CLIENTID,
                clientSecret: process.env.VUE_APP_CLIENTSECRET,
                accessToken: '',
                tokenType: '',
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
            console.log(this.band);
            this.getAlbumData(this.artistId);
        },
        methods: {
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

        }
    }
</script>

<style scoped>
</style>