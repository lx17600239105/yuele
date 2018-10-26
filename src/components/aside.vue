<template>
    <div class="aside">
        <div class="tel_consult"><img src="./consult.png" alt=""></div>
        <div class="qq_consult"><img src="./qq.png" alt=""></div>
        <div class="telephone"><img src="./phone.png" alt=""></div>
        <div class="wec_pub_address"><img src="./weixin.png" alt=""></div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
.aside{
    width: 54px;
    position:fixed;
    top:50%;
    right: 0;
    transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    z-index: 99999;
}
.aside>div{
    margin-bottom: 3px;
    cursor: pointer;
}
</style>