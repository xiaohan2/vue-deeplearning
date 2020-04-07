<template>
  <div id="my-header">
    <el-row>
      <el-col :span="6">
        <div class="grid-content">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              CV
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="detect">目标检测</el-dropdown-item>
              <el-dropdown-item command="seg">语义分割</el-dropdown-item>
              <el-dropdown-item command="superHR">图像超分辨率</el-dropdown-item>
              <el-dropdown-item command="classify">图像分类</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-dropdown>
            <span class="el-dropdown-link">
              NLP
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>文本情感分类</el-dropdown-item>
              <el-dropdown-item>机器翻译</el-dropdown-item>
              <el-dropdown-item>主题提取</el-dropdown-item>
              <el-dropdown-item>文本风格迁移</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-dropdown>
            <span class="el-dropdown-link">
              学习资料
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>CV</el-dropdown-item>
              <el-dropdown-item>NLP</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-dropdown>
            <span class="el-dropdown-link">
              讨论
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>CV</el-dropdown-item>
              <el-dropdown-item>NLP</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  methods: {
    handleCommand(command) {
      this.$message("click on " + command);
      this.$emit("change-menu", command);
    }
  }
};
</script>

<style>
#my-header {
  background-color: #343a42;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
}

.row-bg {
  padding: 0 0;
  background-color: #f9fafc;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fffdf8;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
