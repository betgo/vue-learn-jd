<template>
  <div class="wrapper">
    <div class="search-container">
      <span class="back iconfont" @click="handleBack">&#xe6f2;</span>
      <div class="search">
        <span class="iconfont">&#xe62d;</span>
        <input class="search__text" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
  <Content />
  <Cart />
  </div>
</template>

<script>
import Content from "./Content.vue";
import ShopInfo from "../../components/ShopInfo.vue";
import Cart from "./Cart.vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utility/request";
import { reactive, toRefs } from "vue";
export default {
  components: { ShopInfo, Content, Cart },
  name: "Shop",
  setup() {
    const data = reactive({
      item: {},
    });
    const route = useRoute();
    const router = useRouter();
    const shopId = route.params.id;
    const handleBack = () => {
      router.back();
    };
    const getItemData = async () => {
      const result = await get(`/api/shop/${shopId}`);
      if (result?.errno === 0 && result?.data) {
        data.item = result.data;
      }
    };
    getItemData();
    const { item } = toRefs(data);
    return { item, handleBack };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  padding: 0 0.18rem 0 0.18rem;
  .search-container {
    display: flex;
    line-height: 0.32rem;
  margin: .14rem 0 .04rem 0;
    .back {
      width: 0.3rem;
      font-size: 0.24rem;
      color: #b6b6b6;
    }
  }
  .search {
    flex: 1;
    display: flex;
    background: $search-color;
    border-radius: 0.16rem;
    color: $search-fontcolor;
    .iconfont {
      display: inline-block;
      font-size: 0.16rem;
      margin: 0 0.12rem 0 0.16rem;
    }
    &__text {
      display: block;
      width: 76%;
      padding-right: 0.2rem;
      font-size: 0.14rem;
      border: none;
      outline: none;
      height: 0.32rem;
      background: $search-color;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
