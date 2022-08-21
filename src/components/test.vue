<template>
  <div class="container">
    姓名：<span>{{ $store.state.b.name }}</span
    ><br />
    年龄：<span>{{ getAge }}</span
    ><br />
    <button @click="updateAge(2)">年龄++</button>
    <!-- <button @click="addAge(200)">年龄plus++</button> -->
  </div>
</template>

<script>
import Mock from "mockjs";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "libai",
  // props: ["updateAge"],
  data() {
    return {
      value: "loading...",
      list: [],
    };
  },
  methods: {
    // ...mapMutations("a", ["updateAge"]),
    updateAge(val) {
      // this.$store.commit("a/updateAge", val);
      this.$destroy();
    },
  },
  computed: {
    ...mapGetters("a", ["getAge"]),
  },
  created() {
    console.log({ ...mapMutations("a", ["updateAge"]) });
  },
  beforeDestroy() {
    this.$emit("updateAge");
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>