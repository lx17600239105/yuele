<template>
    <div class="reg_main">
        <div class="register clearfix">
            <div class="reg_left">
                <h3>注册</h3>
                <p v-show="showTishi">{{tiShi}}</p>
                <p class="phone_number"><input type="text" placeholder="手机号" v-model="newUsername"></p>
                <p class="current_code"><input type="text" placeholder="验证码" v-model="phoneNum"><span class="get_code">获取短信验证码</span></p>
                <p class="pass_num"><input type="password" placeholder="设置密码" v-model="newPassword"></p>
                <p class="btn"><button @click="register">注册</button></p>
                <h4 class>注册代表您已经阅读并同意<span>《临考网用户协议》</span></h4>
            </div>
            <div class="reg_line"></div>
            <div class="reg_right">
                <i class="el-icon-close" @click="closeReg"></i>
                <h3>已经是易考网会员</h3>
                <h4 @click="openLogin">立即登录</h4>
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
    export default {
        data(){
            return{
                tiShi : '',
                phoneNum: '',
                showTishi: false,
                newUsername: '',
                newPassword: '',
                hoverActive: true
            }
        },
        methods:{
            closeReg(){
                this.$emit("closeReg",[false,0])
            },
            openLogin(){
                this.$emit("closeReg",[false,1])
            },
            register(){
                if(this.newUsername == "" || this.newPassword == ""){
                    alert("请输入用户名或密码")
                }else{
                    let data = {'username':this.newUsername,'password':this.newPassword}
                    this.$http.post('/api/addUser',data).then((res)=>{
                        console.log(res.body)
                        if(res.body.affectedRows>0){
                            this.tiShi = "注册成功"
                            this.showTishi = true
                            this.username = ''
                            this.password = ''
                            /*注册成功之后再跳回登录页*/
                            setTimeout(function(){
                                this.showRegister = false
                                this.showLogin = true
                                this.showTishi = false
                            }.bind(this),1000)
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
    margin-top: 24px;
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
</style>