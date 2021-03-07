<template>
  <div class="wrapper">
    <static-part></static-part>
    <nearby/>
  </div>
  <docker></docker>
</template>

<script>
import Docker from './Docker.vue';
import Nearby from './Nearby.vue';
import StaticPart from './StaticPart.vue';
export default {
  components: { StaticPart, Nearby, Docker },
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.wrapper {
  position: absolute;
  overflow-y: auto;
  overflow-x:hidden;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.1rem 0.18rem;
  color: $content-fontcolor;
}
</style>
