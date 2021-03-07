<template>
  <div class="docker">
    <div
      v-for="(item,index) in icons"
      :key="item.title"
      :class="{'docker__item':true, 'docker__item--active':index ===0}"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  setup() {
    const icons = [
      { icon: "&#xe6f3;", title: "首页" },
      { icon: "&#xe7e5;", title: "购物车" },
      { icon: "&#xe61e;", title: "订单" },
      { icon: "&#xe660;", title: "我的" },
    ];
    return { icons };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
  color: $content-fontcolor;
}
</style>
