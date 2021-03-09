<template>
  <div class="shops__shop">
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
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
@import "../style/viriables";
.shops__shop__img {
  width: 0.56rem;
  height: 0.56rem;
  margin-right: 0.16rem;
}
 .shops__shop {
    display: flex;
    padding: 0.12rem 0;
 }
.shops__shop__desc {
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
      color: $content-fontcolor;
    }
  }
  .extra {
    color: $titleExtra-fontcolor;
    line-height: 0.18rem;
    font-size: 0.13rem;
  }
}
</style>
