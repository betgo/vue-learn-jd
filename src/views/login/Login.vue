<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="logo" />
    <div class="form">
      <div class="input">
        <input
          type="text"
          v-model="username"
          class="input_content"
          placeholder="请输入手机号"
        />
      </div>
      <div class="input">
        <input
          type="password"
          v-model="password"
          class="input_content"
          placeholder="请输入密码"
        />
      </div>
      <div class="button" @click="handleLogin">登陆</div>
      <div class="extra">
        <span class="item" @click="handleRegister">立即注册</span>
        <span class="item">找回密码</span>
      </div>
    </div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Toast, { useToastEffect } from "../../components/Toast";
import { post } from "../../utility/request";
import { useRouter } from "vue-router";

const useLoginEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        router.push("/");
      } else {
        showToast("登入失败");
      }
    } catch (error) {
      showToast("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return { username, password, handleLogin };
};

const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/login/register");
  };
  return { handleRegister };
};

export default {
  name: "Login",
  components: { Toast },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const { handleRegister } = useRegisterEffect();
    // const { username, password } = toRefs(data);
    return {
      username,
      password,
      handleRegister,
      handleLogin,
      show,
      toastMessage,
      showToast,
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
        &:first-child {
          border-right: 1px solid rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>
