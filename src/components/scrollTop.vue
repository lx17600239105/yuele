<template>
    <div class="go-top" ref="btn" title="回到顶部" @click="goTop">
        <img src="./top.png" alt="回到顶部">
    </div>
</template>

<script>
    let timer = null
    export default {
        data(){
            return{
                isTop: true
            }
        },
        mounted() {
          this.needScroll()
        },
        methods: {
            needScroll () {
                let clientHeight = document.documentElement.clientHeight||document.body.clientHeight
                let obtn = this.$refs.btn
                window.onscroll = function(){
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop||window.pageYOffset
                    if (osTop >= clientHeight) {
                        obtn.style.display = 'block'
                    } else {
                        obtn.style.display = 'none'
                    }
                    if (!this.isTop) {
                        clearInterval(timer)
                    }
                    this.isTOP = false
                }
            },
            goTop(){
                timer = setInterval(function(){
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop||window.pageYOffset
                    let ispeed = Math.floor(-osTop/5)
                    console.log()
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                    this.isTop = true
                    if (osTop === 0) {
                        clearInterval(timer)
                    }
                },30)
            }
        }
    }
</script>

<style scoped>
    .go-top {
        width: 54px;
        position: fixed;
        right: 0;
        bottom: 50px;
        z-index: 99999;
        display: none;
        cursor: pointer;
    }
    .box img{
        float: left;
        width: 100%;
    }
</style>