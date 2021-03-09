<template>
  <div class="content">
    <div class="category">
      <div
        v-for="item in categories"
        :key="item.tab"
        :class="{
          category__item: true,
          'category__item--active': item.tab === currentTab,
        }"
        @click="switchTab(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item of list" :key="item._id">
        <img :src="item.imgUrl" class="product__item__img" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__price__yen">&yen;{{ item.price }}</span>
            <span class="product__item__price__origin"
              >&yen;{{ item.oldPrice }}</span
            >
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus iconfont">&#xe691;</span>
          8
          <span class="product__number__plus iconfont">&#xe668;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, ref, toRefs, watchEffect } from "vue";
import { get } from "../../utility/request";

const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];
// 切换
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const switchTab = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, switchTab };
};

// 当前商品列表,自动监听变化
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] });
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data;
    }
  };
  watchEffect(() => {
    getContentData();
  });
  const { list } = toRefs(content);
  return { list };
};
// 购物车
// const useCartEffect = () => {
//   const product = reactive({
//     carts: [],
//   });
//   const changeCartItem = (shopId, productId, item, num, shopName) => {
//     product.carts.map
//   };
// };
export default {
  name: "Content",

  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, switchTab } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab, shopId);

    return {
      categories,
      list,
      currentTab,
      switchTab,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style//mixins";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
  .category {
    width: 0.76rem;
    background: $search-color;
    overflow-y: scroll;
    height: 100%;
    &__item {
      height: 0.4rem;
      border-radius: 0.02rem;
      text-align: center;
      font-size: 0.14rem;
      line-height: 0.4rem;
      &--active {
        background: #ffffff;
      }
    }
  }
  .product {
    overflow-y: scroll;
    flex: 1;
    &__item {
      position: relative;
      display: flex;
      padding: 0.12rem 0;
      margin: 0 0.16rem;
      border-bottom: 0.01rem solid $content-bgColor;
      &__img {
        width: 0.68rem;
        height: 0.68rem;
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
      &__sales {
        font-size: 0.12rem;
        margin: 0.06rem 0;
        color: $content-fontcolor;
      }
      &__price {
        margin: 0;
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
      bottom: 0.12rem;
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
}
</style>
