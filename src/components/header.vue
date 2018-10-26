<template>
    <div>
        <el-header>
            <el-row>
                <el-col :span="7"><div class="grid-content bg-purple">
                    <img src="./logo.png" alt="">
                </div></el-col>
                <el-col :span="11"><div class="grid-content bg-purple-light">
                    <input type="text" id="search"><label for="search">
                    <img src="./big.png" alt="">
                </label>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple clearfix head_right">
                    <div class="bg-right"><img src="./telephone.png" alt=""></div>
                    <div class="bg-right">
                        <p>15135304808 <span>(赵老师)</span></p>
                    </div>
                </div></el-col>
            </el-row>
        </el-header>
        <div class="nav">
            <el-row>
                <el-col :span="22.5"><div class="grid-content bg-purple-dark">
                    <ul class="oul clearfix">
                        <li v-for="(item,index) in nav" :key="index"><span :class="isSelect===item.title?'hoverSpan':''" title="item.title" @click="selectNav(item.title)">{{item.title}}</span></li>
                    </ul>
                </div></el-col>
                <el-col :span="2.5"><div class="grid-content bg-purple-dark grid_right clearfix">
                    <div class="webLogin clearfix">
                        <span @click="clickLogin">登录</span>
                        <span class="long_line"></span>
                        <span @click="showClick">注册</span>
                    </div>
                </div></el-col>
            </el-row>
        </div>
        <v-register v-show="showReg" @closeReg="closeReg"></v-register>
        <v-login v-show="showLogin" @closeLogin="closeLogin"></v-login>
    </div>
</template>

<script>
    import {getCookie} from '../assets/js/cookie.js'
    import register from './register'
    import login from './login'
    export default {
        data(){
            return{
                showReg: false, //注册
                showLogin:false, //登录
                hoverSpan:false,
                isSelect: '首页',
                nav:[
                    {title:'首页'},
                    {title:'选课中心'},
                    {title:'免费试听'},
                    {title:'私人订制'},
                    {title:'学习中心'}
                ]
            }
        },
        components:{
            'v-register': register,
            'v-login': login,
        },
        mounted() {
            /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
            if (getCookie('username')) {
                this.hoverSpan = true
            }
            this.isSelect = this.$route.name
        },
        methods:{
            selectNav (title) {
                this.isSelect = this.$route.name
                switch (title) {
                    case '首页': this.$router.push('/')
                        break
                    case '学习中心': this.$router.push('/learn')
                        break
                    case '选课中心': this.$router.push('/select')
                        break
                    case '免费试听': this.$router.push('/freeLearn')
                        break
                    case '私人订制': this.$router.push('/customize')
                        break
                }
            },
                showClick(){
                this.showReg = true
            },
            clickLogin(){
                this.showLogin = true
            },
            closeReg(close){
                if(close[1]!==1){
                    this.showReg = close[0]
                }else{
                    this.showReg = close[0]
                    this.showLogin = true
                }
            },
            closeLogin(close){
                if(close[1]!==1){
                    this.showLogin = close[0]
                }else{
                    this.showLogin = close[0]
                    this.showReg = true
                }
            }
        }
    }
</script>

<style>
.hoverSpan{
    border-bottom:2px solid #fff!important;
    color:#fff!important;
}
.el-header{
    text-align: center;
    line-height: 80px;
    height:80px!important;
    margin-bottom:30px;
}
.el-row{
    width: 1200px;
    margin: 0 auto;
}
.el-row .el-col:first-child img{
    height:80px;
}
.bg-purple {
    font-size:0;
    text-align:left;
}
.bg-purple-light{
    height:45px;
    margin-top:10px;
}
.bg-purple-light input{
    width: 342px;
    height: 41px;
    vertical-align: top;
    border:2px solid #c19a3d;
}
.bg-purple-light label{
    display:inline-block;
    width: 53px;
    height: 45px;
    background:#c19a3d;
    cursor: pointer;
}
.bg-purple-light label img{
    vertical-align: baseline;
    margin-bottom:11px;
}
.el-row .el-col:nth-child(3) img{
    width: 40px;
    height: 40px;
}
.bg-right{
    font-size:22px;
    float:left;
    color:#c19a3d;
}
.bg-right p{
    text-indent: 10px;
}
.bg-right p span{
    font-size:18px;
}
.head_right{
    padding-left: 20px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    background-color: #f9fafc;
}
.nav {
    background: url(./navbg.png);
}
.bg-purple-dark>div{
    float:left;
}
.oul li{
    float:left;
    font-size:16px;
    width: 170px;
    text-align: center;
    height:40px;
    line-height:40px;
    cursor: pointer;
}
.oul li span{
    line-height:36px;
    display:inline-block;
    border-bottom: 2px solid transparent;
    color:#cbcbcb;
}
.oul li:hover span{
    border-bottom: 2px solid #fff;
    color:#fff;
}
.oul li:last-child{
    margin-left: 215px;
}
.webLogin{
    font-size:14px;
    color:#c19a3d;
    margin-right:18px;
}
.webLogin span{
    margin:0 9px;
    float:left;
    cursor: pointer;
}
.long_line{
    width: 2px;
    height: 14px;
    background:rgba(62,62,62,0.5);
    margin-top: 12px!important;
}
.grid_right{
    height:40px;
    line-height:40px;
}
</style>