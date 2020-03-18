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
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">dsfdsfdsd</div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="">1799元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="search">
                        <a href="javascript:void(null);"></a>
                    </div>
                </div>
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
    @import "./../assets/scss/mixin";
    @import "./../assets/scss/config.scss";
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333;
            color: #b0b0b0;
            .container {
                @include flex();
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
                        @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
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
                position: relative;
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
                            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
                            transition: margin .2s;
                        }
                        &:after {
                            content: ' ';
                            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
                        }
                        &:hover:before {
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu {
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu {
                        display: inline-block;
                        color: #333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span {
                            cursor: pointer;
                        }
                        &:hover {
                            color: $colorA;
                            .children {
                                height: 220px;
                            }
                        }
                        .children {
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
                            .product {
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-name {
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                }
                .header-search {
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        line-height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        vertical-align: center;
                        input {
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a {
                            @include bgImg(18px, 18px, '/imgs/icon-search.png');
                            margin-left: 16px;
                            margin-top: 16px;
                        }
                    }
                }
            }
        }
    }
</style>
