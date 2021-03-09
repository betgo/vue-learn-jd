<template>
  <div class="shops">
    <div class="shops__title">附近店铺</div>
    <router-link
      :to="`/shop/${item._id}`"
      v-for="item in nearbyList"
      :key="item._id"
    >
      <shop-info :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utility/request";
import ShopInfo from "../../components/ShopInfo.vue";
export default {
  components: { ShopInfo },
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
}
a{
    text-decoration: none;
}
</style>
