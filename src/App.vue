<template>
  <div id="app">
    <button @click="toLogin">登录</button>
    <router-link :to="{ name: 'userlist', params: { id: { na: 123 } } }"
      >用户列表</router-link
    >
    <test @updateAge="updateAge"></test>
    <router-view></router-view>
  </div>
</template>

<script>
import qs from "qs";
import axios from "./request";
import Test from "./components/test.vue";
export default {
  name: "App",
  components: { Test },
  data() {
    return {
      id: "1233",
      userinfo: {
        id: this,
      },
    };
  },
  methods: {
    toLogin() {
      console.log(this.id);
      console.log(this.userinfo);
      this.$emit("testEve");
    },
    updateAge(a) {
      confirm("触发事件");
      console.log(a);
    },
    testCall() {
      console.log("自定义事件触发");
    },
  },

  created() {
    console.log("app");
  },
  mounted() {
    this.$on("testEve", this.testCall);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
