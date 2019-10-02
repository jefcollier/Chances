<template>
	<div class="container">

		<Header />

		<div>

			<logo />

			<h1 class="title">what are the <span class="brand">chances</span>?</h1>
			<h2 class="subtitle">A basic probability sandbox.</h2>

			<div class="links">
				<nuxt-link to="/problems/new" class="button--green" >Get Started</nuxt-link>
				<nuxt-link to="/problems/advnaced" class="button--grey" >Advanced?</nuxt-link>
			</div>

		</div>

		<Footer />

	</div>
</template>

<script >

import Header from '~/components/Header.vue';
import Logo from '~/components/Logo.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: { Header, Logo, Footer }
}
</script>