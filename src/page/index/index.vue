<template>
    <el-container>
        <v-head></v-head>
        <el-main>
            <carousel-img></carousel-img>
            <el-row class="cour_row">
                <el-col :span="8"><div class="grid-content bg-purple clearfix course_col">
                    <div class="cou_left">
                        <h3>金融从业</h3>
                        <p>Financial</p>
                        <ul class="course_ul clearfix">
                            <li>银行从业</li>
                            <li>基金从业</li>
                            <li>黄金从业</li>
                            <li>证券从业</li>
                            <li>期货从业</li>
                        </ul>
                    </div>
                    <div class="cou_right">
                        <img src="./fin.png" alt="">
                    </div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light clearfix course_col">
                    <div class="cou_left">
                        <h3>财会</h3>
                        <p>Accounting</p>
                        <ul class="course_ul clearfix">
                            <li>初级会计</li>
                            <li>中级会计</li>
                            <li>高级会计 </li>
                        </ul>
                    </div>
                    <div class="cou_right">
                        <img src="./ck.png" alt="">
                    </div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple course_col clearfix">
                    <div class="cou_left">
                        <h3>职称</h3>
                        <p>Job title</p>
                        <dl class="job_dl clearfix"><dt>经济师<span class="finisal">></span></dt><dd>初级</dd><dd>中级</dd></dl>
                        <ul class="course_ul clearfix job_denity">
                            <li>会计师</li>
                            <li>中级银行</li>
                        </ul>
                    </div>
                    <div class="cou_right">
                        <img src="./zc.png" alt="">
                    </div>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"><div class="grid-content bg-purple course_col clearfix">
                    <div class="cou_left">
                        <h3>能力认证</h3>
                        <p>Ability certification</p>
                        <ul class="course_ul clearfix">
                            <li>CPA</li>
                            <li>CFA</li>
                        </ul>
                    </div>
                    <div class="cou_right">
                        <img src="./nl.png" alt="">
                    </div>
                </div></el-col>
                <el-col :span="16"><div class="grid-content bg-purple-light clearfix bank_col">
                    <div class="cou_left">
                        <h3>邮政/邮储银行考试</h3>
                        <p>Bank examination</p>
                        <div class="job_name"><span>技能鉴定考试</span><span>银行岗位资格考试</span><span>人才考试</span></div>
                        <dl class="clearfix">
                            <dt>技能鉴定考试<span>></span></dt>
                            <dd>储蓄初中高级考试 </dd>
                            <dd>营销初中高级考试 </dd>
                            <dd>储蓄技师 </dd>
                            <dd>营业技师</dd>
                        </dl>
                        <dl class="clearfix">
                            <dt>银行岗位资格考试 <span>></span></dt>
                            <dd>贷款风险管理</dd>
                            <dd>公司产品经理 </dd>
                            <dd>结算处理 </dd>
                            <dd>审查审批</dd>
                            <dd>信贷类客户经理</dd>
                        </dl>
                        <dl class="clearfix">
                            <dt>人才考试 <span>></span></dt>
                            <dd>人才考试</dd>
                        </dl>
                    </div>
                    <div class="cou_right">
                        <img src="./yz.png" alt="">
                    </div>
                </div></el-col>
            </el-row>
            <el-row class="why_row">
                <el-col :span="24"><div class="grid-content bg-purple-dark why_res">
                    <h3>为什么选择易考网？</h3>
                    <hr />
                    <p>多重优势 助你过关</p>
                    <ul class="why_ul clearfix">
                        <li>一对一私教</li>
                        <li>陪伴学习</li>
                        <li>智能刷题</li>
                        <li>线下服务</li>
                        <li>有问必答</li>
                        <li>强大调研</li>
                        <li>名师阵容</li>
                        <li>快捷高效</li>
                        <li>全真模拟</li>
                        <li>不过退费</li>
                        <li>灵活学习</li>
                    </ul>
                </div></el-col>
            </el-row>
            <div class="work_">
                <div class="work_infor">
                    <h3>
                        行业资讯 <span></span>
                    </h3>
                    <p class="clearfix"><span>Industry information</span><a href="#">MORE +</a></p>
                </div>
                    <!--在此处添加渲染的内容-->
                <div class="swiper-box">
                    <swiper :options="swiperOption" class="swiper vue-swiper">
                        <!-- slides -->
                        <swiper-slide class="swiper-slide" v-for="(item,index,key) in result" :key="key">
                            <div class="slide_text">
                                <h3>{{item.title}}</h3>
                                <p>{{item.contain}}</p>
                                <div class="work_more"><a href="#">MORE  ></a></div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <!-- Optional controls -->
                    <div class="swiper-button-next">></div>
                    <div class="swiper-button-prev"><</div>
                </div>
            </div>
            <div class="desc">
                <ol class="index_ol clearfix">
                    <li class="clearfix"><span class="circle"></span><span class="de_contain">信任为本服务为本</span></li>
                    <li class="clearfix"><span class="circle"></span><span class="de_contain">快捷通过品质生活</span></li>
                    <li class="clearfix"><span class="circle"></span><span class="de_contain">降低考试选择成本</span></li>
                    <li class="clearfix"><span class="circle"></span><span class="de_contain">线上线下终身服务</span></li>
                    <li class="clearfix"><span class="circle"></span><span class="de_contain">全国设立多个网点</span></li>
                </ol>
            </div>
        </el-main>
        <el-footer>
            <v-foot></v-foot>
        </el-footer>
        <v-aside></v-aside>
        <v-scrollTop></v-scrollTop>
    </el-container>
</template>

<script>
import header from '../../components/header'
import carousel from '../../components/carousel'
import foot from '../../components/foot'
import aside from '../../components/aside'
import scrollTop from '../../components/scrollTop'
    export default {
        data(){
            return{
                result:[
                    {
                        title:'2017年人力资源管理专业就业前景',
                        contain:'根据省政府部署，2016年将在全省继织实施青年劳动者技能培训行动，进一步加强对城续组织实施青年劳动者技能培训行动，进一步加强对城...'
                    },
                    {
                        title:'基金从业专业术语解析',
                        contain:'根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城织实施青年劳动者技能培训行动，进一步加强对城'
                    },
                    {
                        title:'2017年人力资源管理专业就业前景',
                        contain:'根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城'
                    },
                    {
                        title:'2017年人力资源管理专业就业前景',
                        contain:'根据省政府部署，2016年将在全省继织实施青年劳动者技能培训行动，进一步加强对城续组织实施青年劳动者技能培训行动，进一步加强对城...'
                    },
                    {
                        title:'基金从业专业术语解析',
                        contain:'根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城织实施青年劳动者技能培训行动，进一步加强对城'
                    },
                    {
                        title:'2017年人力资源管理专业就业前景',
                        contain:'根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城'
                    },
                    {
                        title:'2017年人力资源管理专业就业前景',
                        contain:'根据省政府部署，2016年将在全省继织实施青年劳动者技能培训行动，进一步加强对城续组织实施青年劳动者技能培训行动，进一步加强对城...'
                    },
                    {
                        title:'基金从业专业术语解析',
                        contain:'根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城织实施青年劳动者技能培训行动，进一步加强对城'
                    },
                    {
                        title:'2017年人力资源管理专业就业前景',
                        contain:'根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城根据省政府部署，2016年将在全省继续组织实施青年劳动者技能培训行动，进一步加强对城'
                    }
                ],
                swiperOption:{
                    //切换模式  横屏或者竖屏
                    // direction : 'vertical',
                    //设置自动播放速度
                    autoplay: false,
                    //设置点击箭头
                    paginationClickable :true,
                    loopedSlides:4,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    paginationHide:true,
                    pagination: '.swiper-pagination',
                    //设置同屏显示的数量，默认为1，使用auto是随意的意思。
                    slidesPerView:4,
                    //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
                    mousewheel:true ,
                    //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
                    // freeMode:true
                }
            }
        },
        components:{
            'carousel-img': carousel,
            'v-foot': foot,
            'v-aside': aside,
            'v-scrollTop': scrollTop,
            'v-head': header
        },
        methods:{
        }
    }
</script>

<style>
.el-main {
    color: #333;
    padding:0!important;
    overflow:visible;
}
body > .el-container {
}
.course_col{
    font-size:16px;
    padding-left:90px;
}
.cou_left h3{
    font-size:30px;
    color:#c19a3d;
    text-align: left;
    text-indent:10px;
    margin-bottom: 8px;
}
.course_col>div{
    float:left;
}
.cou_left p{
    font-size:16px;
    color:#888888;
    text-align: left;
    text-indent:10px;
}
.course_ul{
    margin-top:30px;
    width: 210px;
}
.cou_right img{
    height:80px;
}
.course_ul li{
    float:left;
    font-size:16px;
    color:#000000;
    padding:8px 10px;
    font-weight: normal;
    cursor: pointer;
}
.course_ul li:hover{
    color:#fff;
    background:#000000;
    border-radius: 5px;
}
.cour_row{
    margin-top: 54px!important;
    margin-bottom: 60px!important;
}
/*邮储银行*/
.bank_col{
    padding-left:90px;
    position:relative;
}
.bank_col>div{
    float:left;
    text-align: left;
}
.bank_col .cou_left{
    width: 710px;
}
.bank_col dl dd,.bank_col dl dt{
    float:left;
}
.bank_col .cou_right{
    position:absolute;
    right:50px;
    top: 0;

}
.bank_col dl{
    margin-left: 10px;
    margin-bottom: 24px;
    font-size:16px;
}
.bank_col dl dd{
    color:#c19a3d;
    margin-right:20px;
    cursor: pointer;
}
.bank_col dl dt span{
    margin: 0 8px;
    color:#c19a3d;
}
.job_name{
    margin-top: 24px;
    margin-bottom: 10px;
}
.job_name span{
    display:inline-block;
    padding:8px 10px;
    margin-right:28px;
}
/*职称*/
.finisal{
    color:#c19a3d;
    font-size:16px;
    margin:0 10px;
}
.job_dl {
    margin-top:44px;
    margin-left:12px;
}
.job_denity{
    margin-top: 12px;
}
.job_dl dt,.job_dl dd{
    float:left;
}
.job_dl dd{
    color:#c19a3d;
    margin-right:22px;
    cursor:pointer;
}
.why_row{
    width:auto!important;
    height:618px;
    background:url(./whybg.png) no-repeat center center;
    margin-top: 50px!important;
}
.why_row .bg-purple-dark{
    width: 1200px;
    margin: 0 auto;
}
.why_res{
    color:#fff;
}
.why_res h3{
    font-size:36px;
    text-align: center;
    line-height:76px;
    margin-top:62px;
}
.why_res p{
    font-size:16px;
    text-align:center;
    line-height:16px;
    margin-top:20px;
}
.why_ul{
    margin-top: 102px;
}
.why_ul li{
    float:left;
    font-size:24px;
    margin-right:246px;
    width: 120px;
    white-space: nowrap;
    text-align: left;
    margin-bottom:90px;
}
hr{
    height: 2px;
    background: #fff;
    border: none;
}
.why_ul li:nth-child(4n){
    margin-right: 0;
    width:98px;
}
.work_infor{
    width: 1200px;
    margin: 0 auto;
}
.work_infor h3{
    font-size:30px;
    color:#333333;
    text-align:left;
    line-height:30px;
}
.work_infor h3 span{
    width: 132px;
    height: 2px;
    display:inline-block;
    vertical-align: middle;
    background:#333333;
}
.work_infor p{
    line-height:16px;
    margin-top: 10px;
}
.work_infor p span{
    float:left;
    font-size:16px;
    line-height:16px;
    color:#aaaaaa;
}
.work_infor p a{
    float:right;
    font-size:16px;
    color:#aaaaaa;
}
.work_infor p a:hover{
    color:#c19a3d;
}
.swiper-box{
    position:relative;
}
/*swiper*/
.vue-swiper{
    width: 1200px;
}
.vue-swiper .swiper-slide{
    height: 278px;
}
.swiper-box{
    margin-top:60px;
}
.work_{
    width: 100%;
    background:#f4f4f4;
    padding-top:80px;
    padding-bottom:112px;
}
.slide_text{
    width: 262px;
    background:#fff;
    height:278px;
    border-radius:5px;
    padding-left: 25px;
    padding-top: 40px;
    box-sizing: border-box;
    margin: 0 auto;
}
.swiper-pagination{
    left:50%!important;
    bottom:-60px!important;
    padding-left:20px;
    -webkit-transform: translate(-50%,0)!important;
    -moz-transform: translate(-50%,0)!important;
    -ms-transform: translate(-50%,0)!important;
    -o-transform: translate(-50%,0)!important;
    transform: translate(-50%,0)!important;
}
.swiper-pagination-bullet-active{
    background: #000000!important;
}
.swiper-pagination-bullet{
    margin-right: 20px!important;
}
.slide_text h3{
    font-size:18px;
    line-height:25px;
    width: 174px;
    text-align: left;
}
.slide_text p{
    width: 228px;
    line-height: 25px;
    font-size:14px;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 36px;
    position:relative;
    /* 3 times the line-height to show 3 lines */
    height:78px;
    overflow:hidden;
}
.slide_text p::after {
    content:"...";
    font-weight:bold;
    position:absolute;
    bottom:6px;
    right:0;
    padding:0 20px 1px 45px;
    background:url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png) repeat-y;
}
.work_more{
    text-align: left;
}
.work_more a{
    font-size:12px;
    color:#888888;
}
.work_more a:hover{
    color:#c19a3d;
}
.swiper-button-next,.swiper-button-prev{
    background-image:none!important;
    width: 40px!important;
    height: 40px!important;
    border-radius: 50%;
    border:2px solid #888888;
    line-height:40px;
    text-align: center;
    font-size:24px;
    color:#888888;
}
.swiper-button-next:hover,.swiper-button-prev:hover{
    border:2px solid #c19a3d;
    color:#fff;
    background:#c19a3d;
}
.swiper-button-next{
    right:72px!important;
}
.swiper-button-prev{
    left:72px!important;
}
.desc{
    width: 100%;
    height:84px;
    background:#c19a3d;
    padding-top: 22px;
    box-sizing: border-box;
}
.index_ol{
    width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    background:url(./shu.png) no-repeat right center;
}
.index_ol li{
    float:left;
    font-size:16px;
    width: 240px;
    background:url(./shu.png) no-repeat left center;
    box-sizing: border-box;
    padding-left: 56px;
}
.index_ol li span{
   float:left;
}
.index_ol li .circle{
    width: 36px;
    height: 36px;
    border:2px solid #fff;
    border-radius: 50%;
    margin-right: 24px;
}
.index_ol li .de_contain{
    width: 64px;
    line-height:21px;
    font-size:16px;
    color:#fff;
}
</style>