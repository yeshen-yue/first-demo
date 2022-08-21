<template>
  <div class="container">
    <h4>test2</h4>
    <input type="text" />

    <slot></slot>
  </div>
</template>

<script>
import Mock from "mockjs";
// import { Loading } from "element-ui";
export default {
  data() {
    return {
      value: "",
      list: [],
    };
  },
  methods: {},
  created() {
    /* Loading.service({
      lock: true,
      text: "努力加载中....",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    }); */
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>