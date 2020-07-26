<template>
  <div id="login">
      <el-button>默认按钮</el-button>
      <el-row>
  <el-button>默认按钮</el-button>
  <i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
  </div>
</template>
<script>
export default {
    name:'login'
}
</script>
<style lang="scss" scoped>;
#login {
    background: #344a5f;
    height: 100vh;
};
</style>