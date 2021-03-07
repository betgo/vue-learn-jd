<template>
  <div class="shops">
    <div class="shops__title">附近店铺</div>
    <div class="shops__shop">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="shops__shop__img"
      />
      <div class="shops__shop__desc">
        <div class="name">沃尔玛</div>
        <div class="info">
          <span class="item">月售1万+</span>
          <span class="item">起送¥0</span>
          <span class="item">基础运费¥5</span>
        </div>
        <div class="extra">VIP尊享满89元减4元运费券（每月3张）</div>
      </div>
    </div>
    <div class="shops__shop">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="shops__shop__img"
      />
      <div class="shops__shop__desc">
        <div class="name">沃尔玛</div>
        <div class="info">
          <span class="item">月售1万+</span>
          <span class="item">起送¥0</span>
          <span class="item">基础运费¥5</span>
        </div>
        <div class="extra">VIP尊享满89元减4元运费券（每月3张）</div>
      </div>
    </div>
    <div class="shops__shop">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="shops__shop__img"
      />
      <div class="shops__shop__desc">
        <div class="name">沃尔玛</div>
        <div class="info">
          <span class="item">月售1万+</span>
          <span class="item">起送¥0</span>
          <span class="item">基础运费¥5</span>
        </div>
        <div class="extra">VIP尊享满89元减4元运费券（每月3张）</div>
      </div>
    </div>
    <div class="shops__shop">
      <img
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        class="shops__shop__img"
      />
      <div class="shops__shop__desc">
        <div class="name">沃尔玛</div>
        <div class="info">
          <span class="item">月售1万+</span>
          <span class="item">起送¥0</span>
          <span class="item">基础运费¥5</span>
        </div>
        <div class="extra">VIP尊享满89元减4元运费券（每月3张）</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nearby",
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
