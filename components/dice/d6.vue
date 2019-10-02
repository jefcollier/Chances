<template>
    <div>
        
        <d6-nav />

        <div id="dice" class="up-1">
            <span class="side side-1"></span>
            <span class="side side-2"></span>
            <span class="side side-3"></span>
            <span class="side side-4"></span>
            <span class="side side-5"></span>
            <span class="side side-6"></span>
        </div>

    </div>
</template>

<script>
// Potential alternatives?
// https://codepen.io/JefCollier/pen/dybWNvq
// https://github.com/diafygi/dice-css | https://diafygi.github.io/dice-css/ (same)

import d6Nav from '~/components/dice/d6-Nav.vue';
export default {
  components: { d6Nav }
}
</script>

<style lang="scss">
@import './assets/css/style.scss';
@import "compass-mixins";

// 3d Dice + animated number UP
#dice,
.side {
  @include transition(transform 0.4s ease);
}

#dice {
    @include transform(rotateX(-15deg) rotateY(45deg));
    @include transform-style(preserve-3d);
    @include transform-origin(50%, 50%, 0px);
    @include backface-visibility(hidden);

    position: absolute;
    top: 50%;
    left: 50%;

    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;

    &.up-2 {
        @include transform(rotateX(-15deg) rotateY(45deg) rotateZ(90deg));
    }

    &.up-3 {
        @include transform(rotateX(75deg) rotateY(180deg) rotateZ(45deg));
    }

    &.up-4 {
        @include transform(rotateX(75deg) rotateY(0deg) rotateZ(45deg));
    }

    &.up-5 {
        @include transform(rotateX(-15deg) rotateY(-45deg) rotateZ(-90deg));
    }

    &.up-6 {
        @include transform(rotateX(165deg) rotateY(45deg) rotateZ(0deg));
    }

    .side {
        display: block;
        width: 100px;
        height: 100px;
        position: absolute;
        background: white;
        @include background(radial-gradient(white, #ddd));
        border: solid 6px #ddd;
        border-radius: 8px;
        @include box-sizing(border-box);
    }

    .side-1 {
        @include transform(rotateX(90deg) translateZ(50px));
    }
    .side-2 {
        @include transform(rotateY(-90deg) translateZ(50px));
    }
    .side-3 {
        @include transform(rotateY(180deg) translateZ(50px));
    }
    .side-4 {
        @include transform(translateZ(50px));
    }
    .side-5 {
        @include transform(rotateY(90deg) translateZ(50px));
    }
    .side-6 {
        @include transform(rotateX(-90deg) translateZ(50px));
    }

    @for $i from 1 through 6 {
        .side-#{$i}:after {
            content: "#{$i}";
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 88px;
            font-size: 60px;
            font-family: Helvetica;
            color: #444;
        }
    }
}

@keyframes rotation {
    0% { transform: rotate3d(0, 1, 0, 0deg); }
    50% { transform: rotate3d(0, 1, 0, 180deg); }
    100% { transform: rotate3d(0, 1, 0, 360deg); }
}
</style>