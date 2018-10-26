<template>
    <el-container>
        <v-head></v-head>
        <el-main class="learn_main">
            <ul class="learn_ul">
                <li>我的课程</li>
                <li>我的订单</li>
                <li>账户信息</li>
                <li>账户充值</li>
                <li>购买课程</li>
                <li>资料下载</li>
            </ul>
            <div class="learn_info">
                <div class="learn_left">
                    <div class="photo_img"></div>
                </div>
                <div class="learn_right"></div>
            </div>
        </el-main>
        <el-footer>
            <v-foot></v-foot>
        </el-footer>
    </el-container>
</template>

<script>
    import header from '../../components/header'
    import foot from '../../components/foot'
    export default {
        components:{
            'v-foot': foot,
            'v-head': header
        }
    }
</script>

<style scoped>
/*导航效果*/
.oul li span{
    border-bottom:2px solid transparent!important;
    color:#fff!important;
}
.learn_main{
    background:#f5f5f5;
    width: 100%;
}
.learn_ul{
    width: 1198px;
    background: #fff;
    height: 64px;
    border:1px solid #d1d1d1;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 19px;
    padding-left: 34px;
}
.learn_ul li{
    float:left;
    width:78px;
    height:26px;
    font-size:14px;
    color:#666666;
    text-align: center;
    line-height:27px;
    margin-right: 48px;
}
.learn_ul li:hover{
    color:#fff;
    background:#c19a3d;
}
.el-main{
    padding: 20px 0 0 0!important;
}
</style>