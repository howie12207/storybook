<template>
  <button :style="style" class="shine_button">
    {{ text }}
  </button>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    defaultColor: {
      type: String,
      default: "currentColor",
    },

    mainColor: {
      type: String,
      default: "#10b981",
    },
  },
  computed: {
    style() {
      return {
        "--mainColor": this.mainColor,
        "--defaultColor": this.defaultColor,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  // box-sizing: border-box;
}
.shine_button {
  display: inline-block;
  font-size: 16px;
  position: relative;
  padding: 4px 16px;
  border-radius: 3px;
  background-color: transparent;
  border: 1px solid var(--defaultColor);
  color: var(--defaultColor);
  transition: 0.4s;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    border-style: solid;
    position: absolute;
    border-color: var(--mainColor);
    z-index: 1;
    border-radius: 3px;
    box-sizing: content-box;
    transition: 0.4s;
  }

  &:before {
    width: 0;
    height: 100%;
    border-width: 1px 0 1px 0;
    top: -1px;
    left: 0;
    transition-delay: 0.05s;
  }

  &:after {
    width: 100%;
    height: 0;
    border-width: 0 1px 0 1px;
    top: 0;
    left: -1px;
  }

  &:hover {
    color: var(--mainColor);
    &:before {
      width: 100%;
    }

    &:after {
      height: 100%;
    }
  }
}
</style>
