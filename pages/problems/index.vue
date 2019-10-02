<template>
    <div class="container">

        <header />
        
        <h1>Problems</h1>    

        <!-- <coin /> -->
        <!-- <d6 /> -->
        <!-- <d20 /> -->

        <footer />

    </div>
</template>

<script>

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import Coin from '~/components/Coin.vue';
import d6 from '~/components/dice/d6.vue';
import d20 from '~/components/dice/d20.vue';

export default {
    components: { Header, Footer, Coin, d6, d20 }
}
</script>