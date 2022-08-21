<template>
  <div class="container">
    <h4>test3</h4>
    <slot></slot>
  </div>
</template>

<script>
import Mock from "mockjs";
export default {
  data() {
    return {
      value: "",
      list: [],
    };
  },
  methods: {},
  created() {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>