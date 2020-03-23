<template>
    <div class="nav-footer">
        <div class="foot-logo">
            <img src="imgs/logo-footer.png" alt="小米底部图标">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">河畔一脚主页</a><span>|</span>
            <a href="">Vue全栈课程</a><span>|</span>
            <a href="">React全家桶课程</a><span>|</span>
            <a href="">微信支付专项课程(h5 + 小程序 + NODE + Mongo)</a>
        </div>
        <div class="copyright">
            京ICP备10046444号 <span class="domain">© mi.com</span> 京公网安备11010802020134号
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-footer'
    }
</script>
<style lang="scss">
    .nav-footer {
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .foot-logo {
            margin-top: 46px;
            margin-bottom: 31px;
            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link {
            color: #999999;
            a {
                color: #999999;
                display: inline-block;
            }
            span {
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright {
            .domain {
                color: #FF6600;
            }
        }
    }
</style>
