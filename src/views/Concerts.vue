<template>
    <div class="container">
        <h3>
            Concerts
        </h3>
        <div>
            <div class="row" v-for="concert in concerts" :key="concert.id">
                    <ConcertCard class="card" :concert=concert></ConcertCard>
            </div>
        </div>
    </div>
</template>

<script>
    import ConcertCard from "@/components/ConcertCard";

    export default {
        name: "Concerts",
        components: {
            ConcertCard
        },
        data() {
            return {
                concerts: [
                    {
                        id: 1,
                        name: "Concert Number 1",
                        date: 11131,
                        link: "https://www.autism.nope",
                    },
                    {
                        id: 2,
                        name: "Concert Number 2",
                        date: 11132,
                        link: "https://www.autism.nope",
                    },
                    {
                        id: 3,
                        name: "Concert Number 3",
                        date: 11133,
                        link: "https://www.autism.nope",
                    },
                    {
                        id: 4,
                        name: "Concert Number 4",
                        date: 11134,
                        link: "https://www.autism.nope",
                    },
                    {
                        id: 5,
                        name: "Concert Number 5",
                        date: 11135,
                        link: "https://www.autism.nope",
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .card {
        margin-bottom: 10px;
    }
</style>