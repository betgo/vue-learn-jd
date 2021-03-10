<template>
  <div class="mask" v-if="isshow" @click="handleCartListClick()" />
  <div class="cart">
    <div class="product" v-if="isshow">
      <div class="product__top">
        <div class="select"><span class="iconfont">&#xe667;</span> 全选</div>
        <div class="clearall" @click="handleCartClearAll(shopId)">
          清空购物车
        </div>
      </div>
      <template v-for="item of productList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item__select iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe667;'"
            @click="handleProductCheckChange(shopId, item._id)"
          ></div>
          <img :src="item.imgUrl" class="product__item__img" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__price__yen"
                >&yen;{{ item.price }}</span
              >
              <span class="product__item__price__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus iconfont"
              @click="changeCartItem(shopId, item._id, item, -1)"
              >&#xe691;</span
            >
            {{ getProductCartCount(shopId, item._id) }}
            <span
              class="product__number__plus iconfont"
              @click="changeCartItem(shopId, item._id, item, 1)"
              >&#xe668;</span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon" @click="handleCartListClick()">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{ count }}</div>
      </div>
      <div class="count">
        总计:
        <span class="num">&yen;{{ total }}</span>
      </div>
      <div class="buy_btn">结算</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useCommonCartEffect } from "../../effect/CommonCartEffect";

const useCartEffect = () => {
  const store = useStore();
  const route = useRoute();
  const shopId = route.params.id;
  const cartList = store.state.cartList;
  const { changeCartItem, getProductCartCount } = useCommonCartEffect();
  const total = computed(() => {
    const productList = cartList[shopId]?.productList;
    let price = 0;
    if (productList) {
      for (const i in productList) {
        const p = productList[i];
        if (p.check) {
          price += p.count * p.price;
        }
      }
    }

    return price.toFixed(2);
  });
  const count = computed(() => {
    const productList = cartList[shopId]?.productList;
    let count = 0;
    if (productList) {
      for (const i in productList) {
        const p = productList[i];
        if (p.check) {
          count += p.count;
        }
      }
    }
    return count;
  });
  const productList = computed(() => {
    return cartList[shopId]?.productList || [];
  });
  const handleProductCheckChange = (shopId, productId) => {
    store.commit("changeCartItemCheck", { shopId, productId });
  };
  const handleCartClearAll = (shopId) => {
    store.commit("clearCartData", { shopId });
  };
  return {
    total,
    count,
    productList,
    shopId,
    changeCartItem,
    getProductCartCount,
    handleProductCheckChange,
    handleCartClearAll,
  };
};

const useShowEffect = () => {
  const isshow = ref(false);
  const handleCartListClick = () => {
    isshow.value = !isshow.value;
  };
  return { isshow, handleCartListClick };
};
export default {
  name: "Cart",
  setup() {
    const {
      total,
      count,
      productList,
      shopId,
      changeCartItem,
      getProductCartCount,
      handleProductCheckChange,
      handleCartClearAll,
    } = useCartEffect();

    const { isshow, handleCartListClick } = useShowEffect();

    return {
      total,
      count,
      productList,
      changeCartItem,
      getProductCartCount,
      shopId,
      handleCartListClick,
      isshow,
      handleProductCheckChange,
      handleCartClearAll,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style//mixins";
.mask {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__top {
    height: 0.52rem;
    border: 1px solid $content-bgColor;
    font-size: 0.14rem;
    line-height: 0.52rem;
    overflow: hidden;
    .select {
      padding: 0 0 0 0.18rem;
      float: left;
    }
    .clearall {
      padding: 0 0.18rem 0 0;
      text-align: right;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.18rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__select {
      width: 0.42rem;
      line-height: 0.46rem;
      color: $btn-bgColor;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
      &__yen {
        font-size: 0.12rem;
      }
      &__origin {
        margin-left: 0.06rem;
        line-height: 0.2rem;
        font-size: 0.12rem;
        color: $light-fontColor;
        text-decoration: line-through;
      }
    }
  }
  &__number {
    position: absolute;
    right: 0;
    bottom: 0.29rem;
    font-size: 0.16rem;
    line-height: 0.18rem;
    &__minus {
      position: relative;
      top: 0.02rem;
      color: $medium-fontColor;
      margin-right: 0.05rem;
    }
    &__plus {
      position: relative;
      top: 0.02rem;
      color: $btn-bgColor;
      margin-left: 0.05rem;
    }
  }
}
.check {
  bottom: 0;
  height: 0.49rem;
  background: $bgColor;
  display: flex;
  box-shadow: 0 -1px 1px 0 #f1f1f1;
  width: 100%;
  left: 0;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      font-size: 0.08rem;
      line-height: 0.08rem;
      left: 0.46rem;
      top: 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 0.1rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  .count {
    flex: 1;
    padding-left: 0.12rem;
    font-size: 0.12rem;
    line-height: 0.49rem;
    color: $content-fontcolor;
    .num {
      font-size: 0.18rem;
      color: $hightlight-fontColor;
    }
  }
  .buy_btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: #ffffff;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.49rem;
  }
}
.iconfont {
  font-size: 0.2rem;
}
</style>
