<template>
  <div class="shops">
    <div class="shops__title">附近店铺</div>
    <div class="shops__shop" v-for="item in nearbyList" :key="item._id">
      <img :src="item.imgUrl" class="shops__shop__img" />
      <div class="shops__shop__desc">
        <div class="name">{{ item.name }}</div>
        <div class="info">
          <span class="item">月售: {{ item.sales }}</span>
          <span class="item">起送: {{ item.expressLimit }}</span>
          <span class="item">基础运费: {{ item.expressPrice }}</span>
        </div>
        <div class="extra">{{ item.slogan }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utility/request";
export default {
  name: "Nearby",

  setup() {
    const nearbyList = ref([]);
    const getNearbyList = async () => {
      const result = await get("/api/shop/hot-list");
      if (result?.errno === 0 && result?.data?.length) {
        nearbyList.value = result.data;
      }
    };
    getNearbyList();
    return { nearbyList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.shops {
  margin-top: 0.16rem;
  &__title {
    font-family: PingFangSC-Medium;
    font-size: 0.18rem;
    color: #333333;
    font-weight: normal;
  }
  &__shop {
    display: flex;
    padding: 0.12rem 0;
    &__img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
    &__desc {
      flex: 1;
      padding-bottom: 0.12rem;
      border-bottom: 1px solid $content-bgColor;
      .name {
        font-size: 0.16rem;
        color: $content-fontcolor;
      }
      .info {
        margin: 0.08rem 0;
        .item {
          margin-right: 0.16rem;
          line-height: 0.18rem;
          font-size: 0.13rem;
        }
      }
      .extra {
        color: $titleExtra-fontcolor;
        line-height: 0.18rem;
        font-size: 0.13rem;
      }
    }
  }
}
</style>
