<template>
   <div>
       id: {{ clientId }} <br/>
        secret: {{ clientSecret }} <br/>
        {{ getAuth }}
   </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                clientId: process.env.VUE_APP_CLIENTID,
                clientSecret: process.env.VUE_APP_CLIENTSECRET
            }
        },
        computed: {
            getAuth() {
                let encodedData = btoa(this.clientId + ':' + this.clientSecret);
                return 'Authorization: Basic ' + encodedData;
            }
        }
    }
</script>

<style scoped>

</style>