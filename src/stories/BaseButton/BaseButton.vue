<template>
  <button
    :style="style"
    :class="['base_button', { disabled }]"
    @click="clickHandle"
  >
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
      default: "#10b981",
    },
    disabledColor: {
      type: String,
      default: "#d1d5db",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      return {
        "--buttonMainColor": this.mainColor,
        "--buttonDisabledColor": this.disabledColor,
      };
    },
  },
  methods: {
    clickHandle() {
      if (!this.disabled) this.$emit("click");
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.base_button {
  display: inline-block;
  border: 1px solid var(--buttonMainColor);
  background-color: #fff;
  color: var(--buttonMainColor);
  padding: 4px 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.4s;
}
.base_button:hover {
  background-color: var(--buttonMainColor);
  color: #fff;
}
.base_button.disabled {
  border: 1px solid var(--buttonDisabledColor);
  color: var(--buttonDisabledColor);
  cursor: not-allowed;
}
.base_button.disabled:hover {
  background-color: initial;
  color: var(--buttonDisabledColor);
}
</style>
