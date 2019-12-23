<template>
    <b-navbar>
        <b-navbar-brand href="/">Index</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/bands">Bands</b-nav-item>
                <b-nav-item href="/concerts">Concerts</b-nav-item>
                <b-nav-item href="/about">About</b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>