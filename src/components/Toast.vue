<template>
  <div class="toaster">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Toast",
  props: {
    message: String,
  },
};

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: "",
  });
  const showToast = (msg) => {
    toastData.showToast = true;
    toastData.message = msg;
    setTimeout(() => {
      toastData.showToast = false;
      toastData.message = "";
    }, 2000);
  };
  const { show, toastMessage } = toRefs(toastData);
  return { show, toastMessage, showToast };
};
</script>

<style lang="scss" scoped>
.toaster {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  padding: 0.12rem;
  color: #fff;
  border-radius: 0.04rem;
}
</style>
