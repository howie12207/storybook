<template>
  <button :style="style" class="shine_button" @click="clickHandle">
    {{ label }}
  </button>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: "Button",
      required: true,
    },
    mainColor: {
      type: String,
      default: "currentColor",
    },

    hoverColor: {
      type: String,
      default: "#10b981",
    },
  },
  computed: {
    style() {
      return {
        "--buttonMainColor": this.mainColor,
        "--buttonHoverColor": this.hoverColor,
      };
    },
  },
  methods: {
    clickHandle() {
      this.$emit("click");
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.shine_button {
  display: inline-block;
  font-size: 16px;
  position: relative;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid var(--buttonMainColor);
  color: var(--buttonMainColor);
  transition: 0.4s;
  cursor: pointer;
}

.shine_button::before,
.shine_button::after {
  content: "";
  border-style: solid;
  position: absolute;
  border-color: var(--buttonHoverColor);
  z-index: 1;
  border-radius: 3px;
  box-sizing: content-box;
  transition: 0.4s;
}
.shine_button::before {
  width: 0;
  height: 100%;
  border-width: 1px 0 1px 0;
  top: -1px;
  left: 0;
  transition-delay: 0.05s;
}
.shine_button::after {
  width: 100%;
  height: 0;
  border-width: 0 1px 0 1px;
  top: 0;
  left: -1px;
}

.shine_button:hover {
  color: var(--buttonHoverColor);
}
.shine_button:hover::before {
  width: 100%;
}

.shine_button:hover::after {
  height: 100%;
}
</style>
