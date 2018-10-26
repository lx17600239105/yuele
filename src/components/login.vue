<template>
    <div class="reg_main">
        <div class="register clearfix">
            <div class="reg_left">
                <h3>登录</h3>
                <p v-show="showTishi">{{tiShi}}</p>
                <p class="phone_number"><input type="text" placeholder="手机号/用户名/邮箱" v-model="username"></p>
                <p class="pass_num"><input type="password" placeholder="密码" v-model="password"></p>
                <p class="btn"><button @click="login">登录</button></p>
                <h4 class="forget_pass">忘记密码？</h4>
            </div>
            <div class="reg_line"></div>
            <div class="reg_right">
                <i class="el-icon-close" @click="closeLogin"></i>
                <h3>还没有易考网会员？</h3>
                <h4 @click="openReg">立即注册</h4>
                <h3>其他账号登录</h3>
                <ul class="other_user clearfix">
                    <li>
                        <div class="Wei" title="微信"></div>
                        <p>微信</p>
                    </li>
                    <li>
                        <div class="QQ" title="QQ"></div>
                        <p>QQ</p>
                    </li>
                    <li>
                        <div class="weibo" title="微博">
                        </div>
                        <p>微博</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {setCookie} from '../assets/js/cookie.js'
    export default {
        data(){
            return{
                tiShi : '',
                phoneNum: '',
                showTishi: false,
                username: '',
                password: '',
                hoverActive: true,
                hoverSpan: false
            }
        },
        methods:{
            closeLogin(){
                this.$emit("closeLogin",[false,0])
            },
            openReg(){
                this.$emit("closeLogin",[false,1])
            },
            login(){
                if(this.username==''&&this.password==''){
                    alert("请输入账号密码")
                }else{
                    let data = {username:this.username,password:this.password}
                    //接口请求
                    this.$http.post('/api/login',data).then((res)=>{
                        //接口的传值是（-1，该用户不存在），（0密码错误），同时还能检测管理员账号的值
                        if(res.data==-1){
                            this.tishi = "该用户不存在"
                            this.showTishi = true
                        }else if(res.data == 0){
                            this.tishi = "密码输入错误"
                            this.showTishi = true
                        }else if(res.data=='admin'){
                            //路由跳转this.$router.push
                            this.$router.push('/main')
                        }else{
                            this.tishi = "登录成功"
                            this.showTishi = true
                            setCookie('username', this.username, 1000 * 60)
                            setTimeout(function () {
                                this.$router.push('/learn')
                            }.bind(this), 1000)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .reg_main{
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.06);
        z-index:99999;
        position:fixed;
        top: 0;
        left: 0;
    }
    .register{
        position:absolute;
        background:#fff;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        width: 860px;
        height: 416px;
        border-radius: 5px;
        box-shadow: 0 0 1px 1px rgba(0,0,0,0.05),
        0 0 2px 2px rgba(0,0,0,0.05),
        0 0 3px 3px rgba(0,0,0,0.05),
        0 0 4px 4px rgba(0,0,0,0.05);
    }
    .register>div{
        float:left;
    }
    .other_user li{
        float:left;
    }
    .reg_line{
        height:340px;
        width: 1px;
        background:#e5e5e5;
        margin: 44px 70px 0 66px;
    }
    /*注册的左边部分*/
    .reg_left{
        padding-left:48px;
        text-align: left;
        box-sizing: border-box;
    }
    .reg_left h3{
        font-size:18px;
        color:#666666;
        margin-top: 48px;
    }
    .reg_left p input{
        border: 1px solid #cacaca;
        text-indent:38px;
        font-size:12px;

    }
    .reg_left p{
        margin-top: 30px;
    }
    .reg_left p input:focus{
        border: 1px solid #c69010;
    }
    .phone_number input{
        width: 310px;
        height: 40px;
        border-radius: 5px;
        background:url("./user.png") no-repeat 10px center;
    }
    .current_code{
        height: 42px;
        line-height:42px;
    }
    .current_code input{
        width: 182px;
        height: 40px;
        border-radius: 5px;
        background:url("./current_code.png") no-repeat 10px center;
    }
    .pass_num input{
        width: 310px;
        height: 40px;
        border-radius: 5px;
        background:url("./current_code.png") no-repeat 10px center;
    }
    .get_code{
        display: inline-block;
        width: 109px;
        height: 42px;
        background:#e5e5e5;
        border-radius:5px;
        font-size:12px;
        color:#666666;
        margin-left: 19px;
        text-align: center;
        cursor:pointer;
    }
    .btn button{
        width: 310px;
        height: 40px;
        background:#c69010;
        border-radius:30px;
        color:#fff;
        cursor:pointer;
    }
    .reg_left .btn{
        margin-top: 34px;
    }
    .reg_left h4{
        font-size:12px;
        color:#888888;
        margin-top: 24px;
    }
    .reg_left h4 span{
        color:#c69010;
        cursor: pointer;
    }
    /*注册右边部分*/
    .reg_right{
        text-align: left;
    }
    .reg_right h3:nth-of-type(1){
        font-size:18px;
        color:#888888;
        margin-top: 46px;
    }
    .reg_right h4{
        font-size:16px;
        color:#c69010;
        margin-top: 14px;
        cursor:pointer;
    }
    .reg_right h3:nth-of-type(2){
        margin-top: 74px;
        font-size:18px;
        color:#666666;
    }
    .other_user{
        margin-top: 22px;
    }
    .other_user li{
        width: 42px;
        height:64px;
        margin-right: 60px;
        cursor:pointer;
    }
    .other_user li:hover p{
        color:#333333;
    }
    .other_user li p{
        font-size:12px;
        color:#bbbbbb;
        text-align: center;
        margin-top: 10px;
    }
    .other_user li>div{
        width: 42px;
        height: 42px;
    }
    .Wei{
        background:url(./dl_1.png) no-repeat center center;
    }
    .Wei:hover{
        background:url(./dl2.png) no-repeat center center;
        background-size:42px 42px;
    }
    .QQ{
        background:url(./dl_2.png) no-repeat center center;
    }
    .QQ:hover{
        background:url(./dl1.png) no-repeat center center;
        background-size:42px 42px;
    }
    .weibo{
        background:url(./dl_3.png) no-repeat center center;
    }
    .weibo:hover{
        background:url(./dl3.png) no-repeat center center;
        background-size:42px 42px;
    }
    /*关闭按钮*/
    .el-icon-close{
        font-size:30px;
        margin-left:305px;
        margin-top: 20px;
        cursor: pointer;
    }
    .forget_pass{
        text-align: right;
        cursor:pointer;
        font-size:12px;
        color:#cacaca;
    }
</style>