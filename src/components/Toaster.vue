<template>
  <div class="toaster">{{ mesage }}</div>
</template>

<script>
export default {
  name: "Toaster",
  props: {
    message: String,
  },
};
export const showToast = (msg, time = 2000) => {
};
</script>

<style lang="scss" scoped>
.toaster {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 0.12rem;
  border-radius: 0.04rem;
}
</style>
