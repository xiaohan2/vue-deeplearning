<template>
  <div class="result-image">
    <div class="block">
      <span class="demonstration">结果</span>
      <el-image style="width: 100%; height: 100%" :src="base64_data">></el-image>
    </div>
  </div>
</template>

<script>
import Bus from "@/bus";
export default {
  name: "ShowImage",
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      base64_data: ""
    };
  },
  mounted() {
    Bus.$on("img-selected", imgUrl => {
      this.base64_data = "data:image;base64," + imgUrl;
    });
  },
  methods: {}
};
</script>

<style>
.result-image {
  background-color: rgb(231, 230, 230);
}
</style>