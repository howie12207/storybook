<template>
  <div>
    <div class="test">
      <base1
        ref="cropper"
        img="https://fakeimg.pl/250x100/"
        :autoCropWidth="cropper.autoCropWidth"
        :autoCropHeight="cropper.autoCropHeight"
        :fixedNumber="cropper.fixedNumber"
        :fixedBox="cropper.fixedBox"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import base1 from "./stories/ImgCropper/ImgCropper.vue";

export default Vue.extend({
  name: "App",
  components: { base1 },
  computed: {
    style() {
      return {};
    },
  },
  data() {
    return {
      cropper: {
        autoCropWidth: 100,
        autoCropHeight: 100,
        fixedNumber: [1, 1],
        fixedBox: false,
      },
    };
  },
  methods: {},
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.test {
  width: 100%;
  height: 500px;
}
</style>
