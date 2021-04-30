<template>
  <div :style="style" class="icon_x"></div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "IconX",
  props: {
    mainColor: {
      type: String,
      default: "currentColor",
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    style() {
      return {
        "--xColor": this.mainColor,
        "--xSize": `${this.size}px`,
      };
    },
  },
});
</script>

<style scoped>
.icon_x {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: var(--xSize);
  height: var(--xSize);
  border: 2px solid var(--xColor);
  border-radius: 50%;
}
.icon_x:after,
.icon_x:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: calc(var(--xSize) - 10px);
  height: 2px;
  background: var(--xColor);
  transform: rotate(45deg);
  border-radius: 5px;
  top: calc(var(--xSize) / 2 - 3px);
  left: 3px;
}
.icon_x:after {
  transform: rotate(-45deg);
}
</style>
