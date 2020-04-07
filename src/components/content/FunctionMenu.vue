<template>
  <div class="fun-menu">
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://127.0.0.1:5000/filerecv"
      :on-preview="handlePreview"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :file-list="fileList"
      list-type="picture"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选择图片</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1MB</div>
    </el-upload>
    <div class="menu">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="模型选择">
          <el-select v-model="form.region" placeholder="请选择模型">
            <slot name="detect"></slot>
            <slot name="seg"></slot>
            <slot name="superHR"></slot>
            <slot name="classify"></slot>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Bus from "@/bus";
export default {
  name: "FunctionMenu",
  data() {
    return {
      imageUrl: "",
      fileList: [],
      form: {
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form.region);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      const isIMG =
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png";
      const isLt = file.size / 1024 / 1024 <= 1;
      if (!isIMG) {
        this.$message.error("上传头像图片只支持jpg、jpeg、png格式!");
      }
      if (!isLt) {
        this.$message.error("上传头像图片大小不能超过1MB!");
      }
      return isLt && isIMG;
    },
    handleSuccess(response, file, fileList) {
      this.imageUrl = response;
      Bus.$emit("img-selected", this.imageUrl);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style>
.fun-menu {
  background-color: #cce7dcd0;
}
</style>