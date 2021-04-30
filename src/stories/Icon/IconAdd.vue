<template>
  <div :style="style" class="icon_add"></div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "IconAdd",
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
        "--addColor": this.mainColor,
        "--addSize": `${this.size}px`,
      };
    },
  },
});
</script>

<style scoped>
.icon_add {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: var(--addSize);
  height: var(--addSize);
  border: 2px solid var(--addColor);
  border-radius: 50%;
}
.icon_add:after,
.icon_add:before {
  content: "";
  position: absolute;
  box-sizing: border-box;
  width: calc(var(--addSize) / 2);
  height: 2px;
  background: var(--addColor);
  border-radius: 5px;
  top: calc(var(--addSize) / 2 - 3px);
  left: calc(var(--addSize) / 4 - 2px);
}
.icon_add:after {
  width: 2px;
  height: calc(var(--addSize) / 2);
  top: calc(var(--addSize) / 4 - 2px);
  left: calc(var(--addSize) / 2 - 3px);
}
</style>
