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
          <a href="javascript:void(null);" v-if="username">{{username}}</a>
          <a href="javascript:void(null);" @click="login" v-if="!username">登陆</a>
          <a href="javascript:void(null);" v-if="username">我的订单</a>
          <a href="javascript:void(null);" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
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
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!--                        <div class="children"></div>-->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.jpg" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:void(null);"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'nav-header',
    data() {
      return {
        username: '',
        phoneList: []
      }
    },
    filters: {
      currency(val) {
        return !val ? '0.00' : '¥' + val.toFixed(2) + '元'
      }
    },
    mounted() {
      this.getProductList()
    },
    methods: {
      getProductList() {
        this.axios.get('/products', {
          params: {
            categoryId: '100012'
          }
        }).then((res) => {
          if (res.list >= 6) {
            return;
          }
          this.phoneList = res.list;
        })
      },
        goToCart() {
            this.$router.push('/cart')
        },
        login () {
          this.$router.push('/login')
        }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./../assets/scss/base";
  @import "./../assets/scss/mixin";

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
        @include flex();
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
              @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
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
              color: #FF6600;

              .children {
                height: 220px;
                opacity: 1;
              }
            }

            .children {
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              overflow: hidden;
              opacity: 0;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
              background-color: #fff;
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;

                &:before {
                  content: " ";
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border: 1px solid #d7d7d7;
                  height: 100px;
                }

                &:last-child:before {
                  border: none;
                }

                a {
                  display: inline-block;
                }

                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }

                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: #333333;
                }

                .pro-price {
                  color: #FF6600;
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
              box-sizing: border-box; // 盒模型
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
