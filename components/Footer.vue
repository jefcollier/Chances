<template>
  <footer class="bottom-footer fixed-bottom">
    <div class="util__container">
      <nuxt-link class="bottom-footer__link" to="#">About this project</nuxt-link>
    </div>
  </footer>
</template>

<style lang="scss">
@import './assets/css/style.scss';

.bottom-footer {
    display: block;
    width: 100%;
    background: $color-teal;
    padding: 5px;
    text-align: center;
}

.bottom-footer__link {
    color: #fff;
    text-decoration: none;
    &:hover{
      color: #fff;
      text-decoration: underline;
    }
}
</style>