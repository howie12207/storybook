<template>
  <div
    :style="style"
    :class="[
      'expansion_item',
      { expand: active },
      { headerColor },
      { dividerColor },
    ]"
  >
    <div class="expansion_header" @click="expandHandle">
      <slot name="header"></slot><IconChevron direction="bottom" />
    </div>
    <ExpandTransition>
      <div
        v-show="active"
        class="expansion_content"
        :style="{
          padding: '16px 24px',
          paddingTop: this.headerColor || this.dividerColor ? '16px' : '0px',
        }"
      >
        <slot name="content"></slot>
      </div>
    </ExpandTransition>
  </div>
</template>

<script>
import Vue from "vue";
import IconChevron from "./IconChevron";
import ExpandTransition from "./ExpandTransition.js";

export default Vue.extend({
  name: "ExpansionItem",
  components: { IconChevron, ExpandTransition },
  props: {
    headerColor: {
      type: String,
      default: "",
    },
    gap: {
      type: Number,
      default: 0,
    },
    dividerColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    style() {
      return {
        "--expansionItemGap": `${this.gap}px`,
        "--expansionItemHeaderBg": this.headerColor,
        "--expansionItemDividerColor": this.dividerColor,
      };
    },
  },
  methods: {
    expandHandle() {
      this.active = !this.active;
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.expansion_item {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.expansion_item.expand {
  margin: var(--expansionItemGap) 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.expansion_item.expand:first-child {
  margin: 0 0 var(--expansionItemGap) 0;
}
.expansion_item.expand:last-child {
  margin: var(--expansionItemGap) 0 0 0;
}

.expansion_item .expansion_header {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.expansion_item.expand.headerColor .expansion_header {
  background: #ccc;
}

.expansion_item .expansion_header .icon_chevron {
  margin-left: auto;
  transition: 0.3s;
}
.expansion_item.expand .expansion_header .icon_chevron {
  transform: rotate(-180deg);
}

.expansion_item.expand.dividerColor .expansion_content {
  border-top: 1px solid var(--expansionItemDividerColor);
}
</style>
