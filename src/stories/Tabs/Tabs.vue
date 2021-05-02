<template>
  <div :style="style" class="base_tabs">
    <div class="underline" ref="underline">
      <div class="line"></div>
    </div>
    <span
      :class="['tab', { active: active === tab.value }]"
      v-for="(tab, index) of tabs"
      :key="index"
      @click="tabHandle(tab.value, $event)"
      >{{ tab.label }}</span
    >
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    mainColor: {
      type: String,
      default: "rgb(30, 64, 175)",
    },
    width: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active: this.tabs?.[0]?.value,
    };
  },
  computed: {
    style() {
      return {
        "--tabsActive": this.mainColor,
        "--tabsWidth": this.width,
      };
    },
  },
  mounted() {
    const el = document.querySelector(".active");
    this.$refs.underline.style.left = `${el.offsetLeft}px`;
    this.$refs.underline.style.width = `${el.offsetWidth}px`;
  },
  methods: {
    tabHandle(value, e) {
      this.active = value;
      this.$refs.underline.style.left = `${e.target.offsetLeft}px`;
      this.$refs.underline.style.width = `${e.target.offsetWidth}px`;
      this.$emit("tabHandle", value);
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.base_tabs {
  display: flex;
  align-items: center;
  position: relative;
  align-content: center;
  height: 48px;
  font-size: 14px;
  overflow: hidden;
}

.base_tabs .underline {
  height: 2px;
  position: absolute;
  z-index: 1;
  bottom: 0;
  margin: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.base_tabs .underline .line {
  width: 100%;
  height: 100%;
  background-color: var(--tabsActive);
  border-color: var(--tabsActive);
}

.base_tabs .tab {
  display: flex;
  height: 100%;
  width: var(--tabsWidth);
  text-align: center;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.3s;
}
.base_tabs .tab:hover {
  background-color: rgb(239, 246, 255);
}
.base_tabs .tab.active {
  color: var(--tabsActive);
  opacity: 1;
}
</style>
