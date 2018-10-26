<template>
    <div class="footer clearfix">
        <div class="footer_left">
            <ul class="footer_ul clearfix">
                <li>新手指南</li>
                <li>快速通道</li>
                <li>课程相关</li>
                <li>关于我们</li>
            </ul>
            <ol class="footer_ol clearfix">
                <li>微信转账</li>
                <li>微信转账</li>
                <li>直播课程表</li>
                <li>公司介绍</li>
                <li>支付宝转账</li>
                <li>支付宝转账</li>
                <li>产品建议</li>
                <li>学习引擎</li>
                <li>信用卡分期</li>
                <li>信用卡分期</li>
                <li>注会活动</li>
                <li>易考视频</li>
                <li></li>
                <li></li>
                <li>一建活动</li>
                <li>代理加盟</li>
            </ol>
            <p class="sign">
                Sign up
            </p>
            <p class="sign_line"></p>
            <h3 class="sign_china">
                报名入口
            </h3>
            <ol class="entrance clearfix">
                <li><a href="http://cpaexam.cicpa.org.cn/">注册会计师</a></li>
                <li><a href="#">消防工程师</a></li>
                <li><a href="#">一级建造师</a></li>
                <li><a href="http://www.sac.net.cn/cyry/kspt/ksbm/">证券从业</a></li>
                <li><a href="http://baoming.amac.org.cn:10080/JJKSreg/page.htm">基金从业</a></li>
            </ol>
        </div>
        <div class="footer_right">
            <div class="wechat_about clearfix">
                <div class="office_left">
                    <img src="./Qr.png" alt="">
                    <p>易考微信公众号</p>
                </div>
                <div class="test_right">
                    <p>Examination</p>
                    <div class="h_line"></div>
                    <h3 class="test_info">考试介绍</h3>
                    <p>Data download</p>
                    <div class="h_line"></div>
                    <h3>资料下载</h3>
                </div>
            </div>
            <div class="free_tel">
                <p>全国免费电话</p>
                <h3>400-6300036</h3>
            </div>
        </div>
        <div class="footer_line">
        </div>
        <div class="com_info">
            <div class="address">公司地址:临汾市尧都区  |  客服电话:0357-3636024</div>
            <div class="icp">©2018  linkao.com  临考网 版权所有  |  晋ICP备17012676号-1</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style>
.footer{
    width: 1200px;
    margin: 0 auto;
}
.footer>div{
 float:left;
}
.footer_left{
    width: 800px;
}
.footer_right{
    width: 400px;
}
.footer_ul{
    margin-bottom: 26px;
}
.footer_ul li{
   float:left;
   width: 192px;
    text-align: left;
    font-size:18px;
    color:#fff;
}
.footer_ol li{
    float:left;
    width: 192px;
    height: 14px;
    text-align: left;
    color:#888888;
    margin-bottom: 16px;
    cursor: pointer;
}
.footer_ol li:hover{
    color:#fff;
}
.sign{
    margin-top: 80px;
    font-size:14px;
    color:#fff;
    text-align: left;
}
.sign_line{
    width: 135px;
    height: 1px;
    background:gray;
    margin: 12px 0 15px 0;
}
.sign_china{
    font-size:30px;
    color:#fff;
    text-align: left;
}
.entrance{
    margin-top: 26px;
}
.entrance li{
    float:left;
    width: 106px;
    font-size:14px;
    text-align: left;
}
.entrance li a{
    color:#888888;
}
.entrance li:hover a{
    color:#fff;
}
.wechat_about .office_left{
    float:left;
}
.wechat_about .test_right{
    float:right;
}
.office_left p{
    color:#888888;
    font-size:14px;
    margin-top: 10px;
}
.test_right p{
    font-size:14px;
    color:#fff;
    text-align: right;
}
.test_right h3{
    font-size:30px;
    color:#fff;
    cursor: pointer;
    text-align: right;
}
.h_line{
    width: 135px;
    height: 1px;
    background:gray;
    margin: 12px 0 15px 0;
}
.test_info{
    margin-bottom: 60px;
}
.free_tel{
    height: 110px;
    background:rgba(96,96,96,0.3);
    text-align: right;
    box-sizing: border-box;
    padding-right: 24px;
    margin-top: 60px;
}
.free_tel p{
    font-size:24px;
    color:#666666;
    line-height:42px;
}
.free_tel h3{
    font-size:52px;
    color:#fff;
    margin-top: 4px;
}
.footer_line{
    margin-top: 50px;
    height: 1px;
    width: 1200px;
    background:gray;
}
.com_info{
    width: 1200px;
    white-space: pre;
    color:gray;
    margin-top: 24px;
}
.com_info .address{
    float:left;
}
.com_info .icp{
    float:right;
}
/*底部栏*/
.el-footer{
    height: 590px!important;
    background:#000000;
    box-sizing: border-box;
    padding: 65px 0 0!important;
}
</style>