<template>
  <div class="home">
    <my-header @change-menu="changeMenu"></my-header>
    <el-container>
      <el-aside width="50%">
        <show-image></show-image>
      </el-aside>
      <el-main>
        <function-menu>
          <template v-slot:detect v-if="isDetect">
            <el-option label="YOLOV3" value="YOLOV3"></el-option>
            <el-option label="FasterRCNN" value="FasterRCNN"></el-option>
          </template>
          <template v-slot:seg v-if="isSeg">
            <el-option label="FCN" value="FCN"></el-option>
            <el-option label="UNet" value="UNet"></el-option>
            <el-option label="MaskRCNN" value="MaskRCNN"></el-option>
          </template>
          <template v-slot:superHR v-if="isSuperHR">
            <el-option label="EDSR" value="EDSR"></el-option>
            <el-option label="VDSR" value="VDSR"></el-option>
            <el-option label="SRCNN" value="SRCNN"></el-option>
          </template>
          <template v-slot:classify v-if="isClassify">
            <el-option label="DenseNet" value="DenseNet"></el-option>
            <el-option label="ResNet50" value="ResNet50"></el-option>
            <el-option label="Xception" value="Xception"></el-option>
            <el-option label="EfficientNet" value="EfficientNet"></el-option>
          </template>
        </function-menu>
      </el-main>
    </el-container>

    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/content/MyHeader.vue";
import MyFooter from "@/components/content/MyFooter.vue";

import ShowImage from "@/components/content/ShowImage.vue";
import FunctionMenu from "@/components/content/FunctionMenu.vue";
export default {
  name: "Home",
  components: {
    MyHeader,
    MyFooter,
    ShowImage,
    FunctionMenu
  },
  data() {
    return {
      isDetect: true,
      isSeg: false,
      isSuperHR: false,
      isClassify: false
    };
  },
  methods: {
    changeMenu(menuItem) {
      switch (menuItem) {
        case "detect":
          this.isSeg = false;
          this.isDetect = true;
          this.isSuperHR = false;
          this.isClassify = false;
          break;
        case "seg":
          this.isSeg = true;
          this.isDetect = false;
          this.isSuperHR = false;
          this.isClassify = false;
          break;
        case "superHR":
          this.isSeg = false;
          this.isDetect = false;
          this.isSuperHR = true;
          this.isClassify = false;
          break;
        case "classify":
          this.isSeg = false;
          this.isDetect = false;
          this.isSuperHR = false;
          this.isClassify = true;
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style>
.home {
  background-color: rgb(255, 255, 255);
}
</style>
