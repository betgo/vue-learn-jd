<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position_notice">&#xe60b;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe62d;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in iconList" :key="item.desc">
      <img
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
        class="icons__item__img"
      />
      <div class="icons__item__title">{{ item.desc }}</div>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: "StaticPart",
  setup() {
    const iconList = [
      { imgName: "超市", desc: "超市便利" },
      { imgName: "菜市场", desc: "菜市场" },
      { imgName: "水果店", desc: "水果店" },
      { imgName: "鲜花", desc: "鲜花绿植" },
      { imgName: "医药健康", desc: "医药健康" },
      { imgName: "家居", desc: "家居时尚" },
      { imgName: "蛋糕", desc: "烘培蛋糕" },
      { imgName: "签到", desc: "签到" },
      { imgName: "大牌免运", desc: "大牌免运" },
      { imgName: "红包", desc: "红包套餐" },
    ];
    return { iconList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
  .position {
    position: relative;
    padding: 0.16rem 0.24rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 16px;
    @include ellipsis;
    .position__icon {
      position: relative;
      top: 0.01rem;
      font-size: 0.2rem;
    }
    .position_notice {
      position: absolute;
      top: 0.17rem;
      right: 0;
      font-size: 0.2rem;
    }
  }
  .search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: $search-color;
  border-radius: 0.16rem;
  color: $search-fontcolor;
  .iconfont {
    display: inline-block;
    font-size: 0.16rem;
    margin: 0 0.12rem 0 0.16rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  margin-top: 0.16rem;
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 20%;
    text-align: center;
    margin-bottom: 0.16rem;
    &__img {
      width: 0.4rem;
    }
    &__title {
      line-height: 0.17rem;
      padding: 0.06rem 0 0 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.19rem;
}
</style>
