<template>
  <div id="userList">
    <el-table :data="list" style="width: 100%">
      <el-table-column align="center" prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="sex" label="姓名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="age" label="年龄" width="180">
      </el-table-column>
      <el-table-column align="center" prop="school" label="学校" width="180">
      </el-table-column>
      <el-table-column align="center" prop="address" label="地址">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "../request";
export default {
  name: "userList",
  components: {},
  data() {
    return {
      list: [],
      total: 0,
      pageSize: 0,
      value: 14,
      data: { start: 1, limit: 5 },
    };
  },
  methods: {
    handleSizeChange(val) {
      this.data.limit = val;
      this.gerUserList();
    },
    handleCurrentChange(val) {
      this.data.start = val;
      console.log(this.data.start);
      this.gerUserList();
    },
    handleDelete(index, item) {
      this.$confirm("此操作将永久删除该用户信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          axios("/api/test/user/del", "get", { id: item.userId }).then(
            (res) => {
              if (res.data.code == "success") {
                this.$message.success("删除成功");
                this.gerUserList();
              } else {
                this.$message.error("删除失败");
              }
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    gerUserList() {
      axios("/api/test/user/list", "get", this.data).then((res) => {
        this.$message({
          message: "请求用户列表成功",
          type: "success",
          duration: 1000,
        });
        let {
          data: { data: data },
        } = res;
        this.list = data.list;
        this.total = data.totalRow;
        this.pageSize = data.pageSize;
      });
    },
  },

  created() {
    this.gerUserList();
  },
};
</script>

<style>
</style>
