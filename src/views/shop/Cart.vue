<template>
  <div class="check">
    <div class="check__icon">
      <img
        src="http://www.dell-lee.com/imgs/vue3/basket.png"
        class="check__icon__img"
      />
      <!-- <div class="check__icon__tag">{{calculations.total}}</div> -->
    </div>
    <div class="count">
      总计:
      <span class="num"></span>
    </div>
    <div class="buy">结算</div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style//mixins";
.check {
  position: absolute;
  bottom: 0;
  height: 0.49rem;
  background: $bgColor;
  display: flex;
  box-shadow: 0 -1px 1px 0 #F1F1F1;
  width: 100%;
  &__icon__img {
    display: block;
    margin: 0.12rem auto;
    width: 0.28rem;
    height: 0.26rem;
  }
  .count {
    flex: 1;
  }
  .buy{
      width: .98rem;
     background: #4FB0F9;
     color: #ffffff;
     font-size: .14rem;
    text-align: center;
    line-height: .49rem;
  }
}
</style>
