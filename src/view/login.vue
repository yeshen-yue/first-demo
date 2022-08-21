<template>
  <div>
    <el-form label-position="left" ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "../request";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      axios("/api/test/user/doLogin", "post", this.form)
        .then((res) => {
          let { data } = res;
          if (data.code == "success") {
            localStorage.setItem("TOKEN", data.sessionId);
            this.$message({
              message: "登录成功",
              type: "success",
              duration: 1000,
            });
            this.$router.replace(this.$route.meta.enterFrom);
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.el-form {
  margin: 10px auto;
  width: 200px;
}
</style>