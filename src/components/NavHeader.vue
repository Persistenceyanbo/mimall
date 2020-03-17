<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:void(null);">小米商城</a>
                    <a href="javascript:void(null);">MUI</a>
                    <a href="javascript:void(null);">云服务</a>
                    <a href="javascript:void(null);">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:void(null);">登陆</a>
                    <a href="javascript:void(null);">注册</a>
                    <a href="javascript:void(null);" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="javascript:void(null);"></a>
                </div>
                <div class="header-menu">

                </div>
                <div class="header-search"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-header'
    }
</script>
<style lang="scss" scoped>
    @import "./../assets/scss/base";
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333;
            color: #b0b0b0;
            .container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                a {
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }
                .my-cart {
                    width: 110px;
                    background: #FF6600;
                    text-align: center;
                    color: #fff;
                    .icon-cart {
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        background: url(/imgs/icon-cart-checked.png) no-repeat center;
                        background-size: contain;
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header {
            .container {
                height: 112px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url(/imgs/mi-logo.png) no-repeat center;
                            background-size: 55px;
                            transition: margin .2s;
                        }
                        &:after {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url(/imgs/mi-home.png) no-repeat center;
                            background-size: 55px;
                        }
                        &:hover:before {
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu {}
                .header-search {}
            }
        }
    }
</style>
