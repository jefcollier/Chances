<template>
    <div id="SpinningCoin" class="coin">
        <div class="face heads">Heads!</div>
        <div class="face tails">Tails!</div>
    </div>
</template>

<style lang="scss">
@import './assets/css/style.scss';

.coin {
    position: relative;
    top: 25px;
    left: 25px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    animation-name: rotation;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 2.5s;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    
    .face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        backface-visibility: hidden;
        color: #fff;
        
        &.heads {
            background-color: $color-teal;
            z-index: 2;
            transform: rotateY(0deg);
        }

        &.tails {
            background-color: $color-blue-dk;
            z-index: 1;
            transform: rotateY(180deg);
        }
    }
}
</style>