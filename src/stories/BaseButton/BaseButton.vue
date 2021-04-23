<template>
  <button :style="style" :class="['base_button', { disabled }]">
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
    disabled: {
      type: Boolean,
      default: false,
    },
    mainColor: {
      type: String,
      default: "#10b981",
    },
    disabledColor: {
      type: String,
      default: "#d1d5db",
    },
  },
  computed: {
    style() {
      return {
        "--mainColor": this.mainColor,
        "--disabledColor": this.disabledColor,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.base_button {
  display: inline-block;
  border: 1px solid var(--mainColor);
  background-color: #fff;
  color: var(--mainColor);
  padding: 4px 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.4s;
  &:hover {
    background-color: var(--mainColor);
    color: #fff;
  }
  &.disabled {
    border: 1px solid var(--disabledColor);
    color: var(--disabledColor);
    cursor: not-allowed;
    &:hover {
      background-color: initial;
      color: var(--disabledColor);
    }
  }
}
</style>
