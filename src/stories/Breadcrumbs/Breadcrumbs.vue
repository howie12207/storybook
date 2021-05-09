<template>
  <div :style="style" class="breadcrumbs">
    <template v-for="(item, index) of list">
      <template v-if="index !== list.length - 1 && item.path">
        <a class="breadcrumbs_item" :href="item.path" :key="index">{{
          item.label
        }}</a>
        <span class="divider" :key="`${index}divider`">{{ divider }}</span>
      </template>
      <span class="breadcrumbs_item" v-else :key="index">{{ item.label }}</span>
    </template>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Breadcrumbs",
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
    mainColor: {
      type: String,
      default: "rgb(96, 165, 250)",
    },
    secColor: {
      type: String,
      default: "rgb(156, 163, 175)",
    },
    divider: {
      type: String,
      default: "/",
    },
  },
  computed: {
    style() {
      return {
        "--breadcrumbsColor": this.mainColor,
        "--breadcrumbsSecColor": this.secColor,
      };
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.breadcrumbs .breadcrumbs_item {
  position: relative;
  margin: 0 8px;
  text-decoration: none;
  color: var(--breadcrumbsColor);
  transition: 0.4s;
}
.breadcrumbs a.breadcrumbs_item:hover {
  opacity: 0.7;
}
.breadcrumbs span.breadcrumbs_item,
.breadcrumbs .divider {
  color: var(--breadcrumbsSecColor);
}
</style>
