<template>
    <el-carousel indicator-position="outside" :interval="5000">
        <el-carousel-item v-for="item in 3" :key="item">
           <div class="cou_img" :style="{backgroundImage:'url('+bgImg+')'}"></div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: 'carousel',
        data(){
            return{
                bgImg: 'http://47.106.166.17/image/bg.png'
            }
        }
    }
</script>

<style>
    .el-carousel__container{
        height:400px!important;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__indicators--outside{
        position:absolute!important;
        bottom:35px!important;
        -weblit-transform: translate(-50%,0)!important;
        -o-transform: translate(-50%,0)!important;
        -moz-transform: translate(-50%,0)!important;
        -ms-transform: translate(-50%,0)!important;
        transform: translate(-50%,0)!important;
    }
    .el-carousel__indicator{
        border-radius: 50%!important;
        margin-right:24px!important;
    }
    .el-carousel__indicator .el-carousel__button{
        width: 18px!important;
        height: 18px!important;
        border-radius: 50%!important;
        border:3px solid #fff!important;
        opacity:1!important;
        background:transparent!important;
    }
    .el-carousel__indicator.is-active .el-carousel__button{
        opacity: 1!important;
        background-color:#fff!important;
    }
    .el-carousel__indicators--outside .el-carousel__indicator:hover button{
        opacity: 1!important;
    }
    .el-carousel__arrow{
        width: 70px!important;
        height: 70px!important;
        font-size:50px!important;
    }
    .el-carousel__arrow--right{
        right:56px!important;
    }
    .el-carousel__arrow--left{
        left:56px!important;
    }
.cou_img{
    width: 100%;
    height: 100%;
    background-position:center center;
    background-size:auto 100%;
    background-repeat:no-repeat;
}
</style>