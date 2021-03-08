<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="logo" />
    <div class="form">
      <div class="input">
        <input
          type="text"
          class="input_content"
          placeholder="请输入手机号"
          v-model="username"
        />
      </div>
      <div class="input">
        <input
          type="password"
          class="input_content"
          placeholder="请输入密码"
          v-model="password"
        />
      </div>
      <div class="input">
        <input
          type="password"
          class="input_content"
          placeholder="确认密码"
          v-model="ensurement"
        />
      </div>
      <div class="button" @click="handleRegister">注册</div>
      <div class="extra">
        <span class="item" @click="handleLoginClick">已有账号去登陆</span>
      </div>
    </div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { post } from "../../utility/request";
import Toast, { useToastEffect } from "../../components/Toast";
// 处理注册相关逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
    ensurement: "",
  });

  const handleRegister = async () => {
    try {
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        router.push({ name: "Login" });
      } else {
        showToast("注册失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };

  const { username, password, ensurement } = toRefs(data);
  return { username, password, ensurement, handleRegister };
};

// 处理登陆跳转
const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: "Login" });
  };
  return { handleLoginClick };
};
export default {
  name: "Register",
  components: { Toast },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const {
      username,
      password,
      ensurement,
      handleRegister,
    } = useRegisterEffect(showToast);
    const { handleLoginClick } = useLoginEffect();
    return {
      username,
      password,
      ensurement,
      show,
      toastMessage,
      handleRegister,
      handleLoginClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // padding: 0 .4rem;
  .logo {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  .form {
    width: 100%;
    .input {
      height: 0.48rem;
      margin: 0 0.4rem 0.16rem 0.4rem;
      background: $input_bgcolor;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.06rem;
      padding-left: 0.16rem;
      &_content {
        box-sizing: border-box;
        line-height: 0.48rem;
        border: none;
        outline: none;
        background: none;
        width: 100%;
        font-size: 0.16rem;
        &::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
    .button {
      // width: 100%;
      height: 0.48rem;
      margin: 0.16rem 0.4rem 0.16rem 0.4rem;
      background: #0091ff;
      box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
      border-radius: 0.04rem;
      font-family: PingFangSC-Regular;
      font-size: 0.16rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      line-height: 0.48rem;
    }
    .extra {
      text-align: center;
      .item {
        font-size: 0.14rem;
        color: rgba(0, 0, 0, 0.5);
        letter-spacing: 0;
        padding: 0 0.13rem;
      }
    }
  }
}
</style>
